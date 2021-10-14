/**
 * @author Munyaradzi Siyawamwaya
 */

import java.awt.*;
import java.awt.event.*;
import java.awt.image.*;
import java.io.*;
import javax.imageio.*;

// Main class
public class HoughTransform extends Frame implements ActionListener {
	BufferedImage input;
	int width, height, diagonal;
	ImageCanvas source, target;
	TextField texRad, texThres;
	// Constructor
	public HoughTransform(String name) {
		super("Hough Transform");
		// load image
		try {
			input = ImageIO.read(new File(name));
		}
		catch ( Exception ex ) {
			ex.printStackTrace();
		}
		width = input.getWidth();
		height = input.getHeight();
		diagonal = (int)Math.sqrt(width * width + height * height);
		// prepare the panel for two images.
		Panel main = new Panel();
		source = new ImageCanvas(input);
		target = new ImageCanvas(input);
		main.setLayout(new GridLayout(1, 2, 10, 10));
		main.add(source);
		main.add(target);
		// prepare the panel for buttons.
		Panel controls = new Panel();
		Button button = new Button("Line Transform");
		button.addActionListener(this);
		controls.add(button);
		controls.add(new Label("Radius:"));
		texRad = new TextField("10", 3);
		controls.add(texRad);
		button = new Button("Circle Transform");
		button.addActionListener(this);
		controls.add(button);
		controls.add(new Label("Threshold:"));
		texThres = new TextField("25", 3);
		controls.add(texThres);
		button = new Button("Search");
		button.addActionListener(this);
		controls.add(button);
		// add two panels
		add("Center", main);
		add("South", controls);
		addWindowListener(new ExitListener());
		setSize(diagonal*2+100, Math.max(height,360)+100);
		setVisible(true);
	}
	class ExitListener extends WindowAdapter {
		public void windowClosing(WindowEvent e) {
			System.exit(0);
		}
	}
	// Action listener
	public void actionPerformed(ActionEvent e) {
		// perform one of the Hough transforms if the button is clicked.
		if ( ((Button)e.getSource()).getLabel().equals("Line Transform") ) {
			int[][] g = new int[360][diagonal];
                        
                        //traverse through the image to identify edge pixels
                        for (int y = 0; y < height; y++){
                            for (int x = 0; x < width; x++){
                                
                                //get the edge pixel
                                if (getPixel(x,y) == 0){
                                    
                                    //vary theta from min to max
                                    for (int t = 0; t < 360; t++){
                                        int p = (int)( x*Math.cos(t) - y*Math.sin(t));
                                        
                                        if (!(p<0)){
                                            g[t][p]++;
                                        }
                                        
                                    }
                                    
                                }
                                
                            }
                        }
                        printArr(g);
                        
                        //find the maximum value in the counter array for thresholding
                        int max = 0;
                        for ( int p = 0; p < 360; p++){
                            for (int q = 0; q < diagonal; q++){
                                if (g[p][q] > max) max = g[p][q];
                                
                            }
                        }
                        int t = Integer.parseInt(texThres.getText());
                        int thresh = (int) t * max / 100;
                        
                        //check if the value is more/less than the threshold value
                        for ( int d = 0; d < 360; d++){
                            for ( int c = 0; c < diagonal; c++){
                                if (g[d][c] < t) g[d][c] = 0;
                            }
                        }
                        
                        //print the array of images displayed.
                        printArr(g);
                        
                        //find and print the lines on the image
                        printLine();
                        
			DisplayTransform(diagonal, 360, g);
		}
		else if ( ((Button)e.getSource()).getLabel().equals("Circle Transform") ) {
			int[][] g = new int[height][width];
			int radius = Integer.parseInt(texRad.getText());
                        
			// insert your implementation for circle here.
                        
                        for ( int ye = 0; ye < height; ye++){
                            for (int xe = 0; xe < width; xe++){
                                
                                //get the edge pixel
                                if (getPixel(ye,xe)==0){
                                    
                                    //increment counters
                                    for ( int gy = 0; gy < height; gy++){
                                        for ( int gx = 0; gx < width; gx++){
                                            
                                            int f = (gx - xe)*(gx - xe) + (gy - ye)*(gy -ye) - radius*radius;
                                            if (f == 0){
                                                g[gy][gx]++;
                                            }
                                            
                                        }
                                    }
                                    
                                }
                                
                            }
                        }
                        //print array
                        printArr(g);
                        
                        //find and print the circles 
                        printCircle();
                        
			DisplayTransform(width, height, g);
		}
	}
        
        //funtion to print the values found
        public void printArr(int[][] q){
            for (int a = 0; a < height; a++){
                for (int b = 0; b < width; b++){
                    System.out.print(q[a][b] + " ");
                }
                System.out.println();
            }
        }
        
        //funtion to find edges and print
        public void printLine(){
            
        }
        
        //print the circles found
        public void printCircle(){
            
        }
        
        // convert pixel to int
        public int getPixel(int x, int y){
            int pixel = input.getRGB(x, y);
            int red = (pixel>>16)&0xff;
            int green = (pixel>>8)&0xff;
            int blue = (pixel)&0xff;

            //get the intesities
            int avg = (red + green + blue)/3;
            return avg;
        }
        
	// display the spectrum of the transform.
	public void DisplayTransform(int wid, int hgt, int[][] g) {
		target.resetBuffer(wid, hgt);
		for ( int y=0, i=0 ; y<hgt ; y++ )
			for ( int x=0 ; x<wid ; x++, i++ )
			{
				int value = g[y][x] > 255 ? 255 : g[y][x];
				target.image.setRGB(x, y, new Color(value, value, value).getRGB());
			}
		target.repaint();
	}

	public static void main(String[] args) {
		new HoughTransform(args.length==1 ? args[0] : "rectangle.png");
	}
}
