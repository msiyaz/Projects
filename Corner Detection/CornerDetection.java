
/**
 * @author Munyaradzi Siyawamwaya
 */

import java.awt.*;
import java.awt.event.*;
import java.awt.image.*;
import java.io.*;
import java.util.*;
import java.util.stream.IntStream;
import javax.imageio.*;
import javax.swing.*;

// Main class
public class CornerDetection extends Frame implements ActionListener {
        gPixel[][] gradients;
        int[][] rArray;
	BufferedImage input;
	int width, height;
	double sensitivity=.1;
	int threshold=20;
	ImageCanvas source, target;
	CheckboxGroup metrics = new CheckboxGroup();
	// Constructor
	public CornerDetection(String name) {
		super("Corner Detection");
		// load image
		try {
			input = ImageIO.read(new File(name));
		}
		catch ( Exception ex ) {
			ex.printStackTrace();
		}
                
                //apply gaussion to smoothen the image
                int[] filter1 = {1, 2, 1, 2, 4, 2, 1, 2, 1};
                int filterWidth1 = 3;
                BufferedImage gau = blur(input,filter1,filterWidth1);
                
		width = input.getWidth();
		height = input.getHeight();
                gradients = new gPixel[height][width];
                rArray = new int[height][width];
		// prepare the panel for image canvas.
		Panel main = new Panel();
		source = new ImageCanvas(gau);
		target = new ImageCanvas(width, height);
		main.setLayout(new GridLayout(1, 2, 10, 10));
		main.add(source);
		main.add(target);
		// prepare the panel for buttons.
		Panel controls = new Panel();
		Button button = new Button("Derivatives");
		button.addActionListener(this);
		controls.add(button);
		// Use a slider to change sensitivity
		JLabel label1 = new JLabel("sensitivity=" + sensitivity);
		controls.add(label1);
		JSlider slider1 = new JSlider(1, 25, (int)(sensitivity*100));
		slider1.setPreferredSize(new Dimension(50, 20));
		controls.add(slider1);
		slider1.addChangeListener(changeEvent -> {
			sensitivity = slider1.getValue() / 100.0;
			label1.setText("sensitivity=" + (int)(sensitivity*100)/100.0);
		});
		button = new Button("Corner Response");
		button.addActionListener(this);
		controls.add(button);
		JLabel label2 = new JLabel("threshold=" + threshold);
		controls.add(label2);
		JSlider slider2 = new JSlider(0, 100, threshold);
		slider2.setPreferredSize(new Dimension(50, 20));
		controls.add(slider2);
		slider2.addChangeListener(changeEvent -> {
			threshold = slider2.getValue();
			label2.setText("threshold=" + threshold);
		});
		button = new Button("Thresholding");
		button.addActionListener(this);
		controls.add(button);
		button = new Button("Non-max Suppression");
		button.addActionListener(this);
		controls.add(button);
		button = new Button("Display Corners");
		button.addActionListener(this);
		controls.add(button);
		// add two panels
		add("Center", main);
		add("South", controls);
		addWindowListener(new ExitListener());
		setSize(Math.max(width*2+100,850), height+110);
		setVisible(true);
	}
	class ExitListener extends WindowAdapter {
		public void windowClosing(WindowEvent e) {
			System.exit(0);
		}
	}
	// Action listener for button click events
	public void actionPerformed(ActionEvent e) {
		// generate Moravec corner detection result
                //int[][] rArray = new int[height][width];
                
		if ( ((Button)e.getSource()).getLabel().equals("Derivatives") ){
			//derivatives();
                        Sobel();
                }
                
                
                /**
                * Calculate the corner response function
                */
                if ( ((Button)e.getSource()).getLabel().equals("Corner Response") ) {
                    //get derivates
                    Sobel();
                    
                    //for the whole image compute the value of corner response function
                    for (int y4 = 2; y4 < height-2; y4++){
                        for (int x4 = 2; x4 < width-2; x4++){
                            
                            //window size 3x3
                            //where a = Ix*Ix, b = Ix*Iy, d = Iy*Iy
                            int sumA = 0, sumB = 0, sumD = 0;
                            
                            for (int v = -1; v <= 1; v++){
                                for (int u = -1; u <= 1; u++) {
                                  
                                    gPixel pgrad = gradients[x4+u][y4+v];
                                    sumA += pgrad.getGx()*pgrad.getGx();
                                    sumB += pgrad.getGx()*pgrad.getGy();
                                    sumD += pgrad.getGy()*pgrad.getGy();
                                    
                                }
                            }
                            
                            rArray[x4][y4] = (int)( (sumA*sumD - sumB*sumB) - ( sensitivity*( (sumA + sumD)*(sumB + sumD) )) ); //R
                        }
                    }
                    
                    printArr(rArray);
                    printImg(rArray);
                    
                }
                
                //apply thresholding to the R values
                if ( ((Button)e.getSource()).getLabel().equals("Thresholding") ) {
                    
                    //stoe values computed
                    int[][] tArray = new int[height][width];
                    
                    //check if the value of R is below or above the threshold value
                    for (int y3 = 0; y3 < height; y3++){
                        for (int x3 = 0; x3 < width; x3++){
                            
                            if (rArray[x3][y3] > 0) {
                                
                                if (rArray[x3][y3] > threshold){
                                    tArray[x3][y3] = 255;
                                }
                                else {
                                    tArray[x3][y3] = 0;
                                }
                                
                            }
                        }
                    }
                    
                    printImg(tArray);
                    
                }
                
                if ( ((Button)e.getSource()).getLabel().equals("Non-max Suppression") ) {
                    int radius = 1;
                    ArrayList<int[]> corners = new ArrayList<>();
                    
                    for (int y5 = 1; y5 < height-1; y5++){
                        int x5 = 1;
                        while (x5 < width-1 && rArray[x5][y5-1] >= rArray[x5][y5]) {
                            x5++;
                        }
                        while (x5 < width-1){
                            while (x5 < width-1 && rArray[x5][y5+1] >= rArray[x5][y5]) {
                                x5++;
                            }
                            
                            if (x5 < width-1) {
                                int p1 = x5 + 2;
                                int p2 = 0;
                                int l = 0;
                                while (p1 < x5+radius && rArray[p1][y5] < rArray[x5][y5]){
                                    p1++;
                                }
                                if (p1 > x5+radius){
                                    p2 = x5-1;
                                }
                                while (p2 >= x5-radius && rArray[p2][y5] <= rArray[x5][y5]){
                                    p2--;
                                }
                                if (p2 < x5-radius){
                                    int k = y5+radius;
                                    boolean found = false;
                                    
                                    while (!found && k > y5){
                                        l = x5 + radius;
                                        
                                        while (!found && l >= x5+radius){
                                            if (rArray[l][k] > rArray[x5][y5]) found = true;
                                            l--;
                                        }
                                        k--;
                                        
                                    }
                                    k = y5-radius;
                                    
                                    while (!found && k < y5){
                                        l = x5-radius;
                                        while (!found && l <= x5+radius){
                                            if (rArray[l][k] >= rArray[x5][y5]) found = true;
                                            l++;
                                        }
                                        k++;
                                    }
                                    if (!found){
                                        int[] list = {x5,y5};
                                        corners.add(list);
                                    }
                                }
                                
                            }
                        }
                    }
                }
                
	}
        
        
        //print the image given an image array
        public void printImg(int[][] g) {
            for (int q = 0; q < height; q++){
                for (int w = 0; w < width; w++){
                    int p = (g[w][q])<< 16 | (g[w][q])<< 8 | g[w][q];
                    target.image.setRGB(w, q, p);
                }
            }
            target.repaint();
        }
        
        //get the gray scale pixel
        public int getGray(int x, int y){
            int pixel = input.getRGB(x, y);
            int red = (pixel>>16)&0xff;
            int green = (pixel>>8)&0xff;
            int blue = (pixel)&0xff;
            
            //get the intesities
            int avg = (red + green + blue)/3;
            
            return avg;
        }
        
        //print image show image given the image array
        public void printArr(int[][] q){
            for (int a = 0; a < height; a++){
                for (int b = 0; b < width; b++){
                    System.out.print(q[a][b] + " ");
                }
                System.out.println();
            }
        }
        
        
        
	public static void main(String[] args) {
		new CornerDetection(args.length==1 ? args[0] : "signal_hill.png");
	}
        
        
        //find the gradients at each image pixel
        public void Sobel(){
            
            /**
             * Calculate gradients
             */
            int[][] grad = new int[height][width];
            //gPixel[][] gradients = new gPixel[height][width];
            
            //go through each pixel calculating the gradient using the sobel operator
            for (int y = 1; y < height-1; y++){
                for (int x = 1; x < width-1; x++){
                    
                    int gx = 0, gy = 0, totalX = 0, totalY = 0;
                    int[][] dx = {  {-1, 0, 1},
                                    {-2, 0, 2},
                                    {-1, 0, 1 } };
                    int[][] dy = {  {1, 2, 1},
                                    {0, 0, 0},
                                    {-1, -2, -1} };
                    
                    for ( int w = -1; w <=1; w++){
                        for ( int z = -1; z <= 1; z++){
                            
                            totalX += getGray(x+z, y+w) * dx[z+1][w+1];
                            totalY += getGray(x+z, y+w) * dy[z+1][w+1];
                            
                        }
                    }
                    totalX = totalX / 8; totalY = totalY / 8;
                    //store gradient
                    grad[x][y] = (int)Math.sqrt( (totalX*totalX) + (totalY*totalY) );
                    //set the point to the gradient object
                    gradients[x][y] = new gPixel(totalX, totalY);
                }
            } 
            //Print array and show pic for testing
            printArr(grad);
            printImg(grad);
            
        }
        
        
        /**
         * Apply Gaussion Filter
         * @param image image to blur
         * @param filter convulation
         * @param filterWidth filter convulation length 
         * @return 
         */
        public static BufferedImage blur(BufferedImage image, int[] filter, int filterWidth) {
            if (filter.length % filterWidth != 0) {
                throw new IllegalArgumentException("filter contains a incomplete row");
            }

            int width = image.getWidth();
            int height = image.getHeight();
            int sum = IntStream.of(filter).sum();

            int[] input = image.getRGB(0, 0, width, height, null, 0, width);

            int[] output = new int[input.length];

            int pixelIndexOffset = width - filterWidth;
            int centerOffsetX = filterWidth / 2;
            int centerOffsetY = filter.length / filterWidth / 2;

            // apply filter
            for (int h = height - filter.length / filterWidth + 1, w = width - filterWidth + 1, y = 0; y < h; y++) {
                for (int x = 0; x < w; x++) {
                    int r = 0;
                    int g = 0;
                    int b = 0;
                    for (int filterIndex = 0, pixelIndex = y * width + x;
                            filterIndex < filter.length;
                            pixelIndex += pixelIndexOffset) {
                        for (int fx = 0; fx < filterWidth; fx++, pixelIndex++, filterIndex++) {
                            int col = input[pixelIndex];
                            int factor = filter[filterIndex];

                            // sum up color channels seperately
                            r += ((col >>> 16) & 0xFF) * factor;
                            g += ((col >>> 8) & 0xFF) * factor;
                            b += (col & 0xFF) * factor;
                        }
                    }
                    r /= sum;
                    g /= sum;
                    b /= sum;
                    // combine channels with full opacity
                    output[x + centerOffsetX + (y + centerOffsetY) * width] = (r << 16) | (g << 8) | b | 0xFF000000;
                }
            }

            BufferedImage result = new BufferedImage(width, height, BufferedImage.TYPE_INT_ARGB);
            result.setRGB(0, 0, width, height, output, 0, width);
            return result;
        }
        
        // moravec implementation
	void derivatives() {
		int l, t, r, b, dx, dy;
		Color clr1, clr2;
		int gray1, gray2;
                
		for ( int q=0 ; q<height ; q++ ) {
			t = q==0 ? q : q-1;
			b = q==height-1 ? q : q+1;
			for ( int p=0 ; p<width ; p++ ) {
				l = p==0 ? p : p-1;
				r = p==width-1 ? p : p+1;
				clr1 = new Color(source.image.getRGB(l,q));
				clr2 = new Color(source.image.getRGB(r,q));
				gray1 = clr1.getRed() + clr1.getGreen() + clr1.getBlue();
				gray2 = clr2.getRed() + clr2.getGreen() + clr2.getBlue();
				dx = (gray2 - gray1) / 3;
				clr1 = new Color(source.image.getRGB(p,t));
				clr2 = new Color(source.image.getRGB(p,b));
				gray1 = clr1.getRed() + clr1.getGreen() + clr1.getBlue();
				gray2 = clr2.getRed() + clr2.getGreen() + clr2.getBlue();
				dy = (gray2 - gray1) / 3;
				dx = Math.max(-128, Math.min(dx, 127));
				dy = Math.max(-128, Math.min(dy, 127));
                                
                                //create a gPixel (gradient pixel) object for each pixel with the dx and dy values
                                gradients[p][q] = (new gPixel(dx, dy));
				target.image.setRGB(p, q, new Color(dx+128, dy+128, 128).getRGB());
			}
                        
		}
               // blur(target,filter1,filterWidth1);
		target.repaint();
	}
        
}

