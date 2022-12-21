import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import java.util.concurrent.TimeUnit;
import java.util.Random;
/**
 * This class creates the grid on which the cells live
 *
 * @author (Munyaradzi Siyawamwaya)
 */
public class Grid extends JFrame
{
    // instance variables
    private int x, y, iterations;  //dimensions of the grid
    private String mode;
    private JPanel panel;
    private Cell [][] cells; //array containing all the cells
    /**
     * Constructor for objects of class Grid
     */
    public Grid(int iterations, int dimensions, String mode)
    {
        //initiate instance variables
        x = dimensions;
        y = dimensions;
        this.mode = mode;
        
        this.iterations = iterations;
        
        //create the window
        panel = new JPanel();
        panel.setLayout(new GridLayout(x,x,1,1));
        panel.setPreferredSize(new Dimension(x*x,x*x));
        //build the grid with cells on it
        genesis();
        //pick a mode
        if (mode.equals("P"))
        {
            pulsar();
            System.out.println("i am pulsar");
        }
        else if (mode.equals("L"))
        {
            spaceship();
            System.out.println("i am spaceship");
        }
        else if (mode.equals("R"))
        {
            random();
            System.out.println("here's random");
        }
        else
        {
            System.out.println("That's not a mode, b'y");
            System.out.println("Here's random");
            random();
        }
        
        //iterate through life however many times
        for (int i = 0; i<iterations; i++)
        {
            iterate();
        }
    }

    /**
     * Genesis creates the grid of cells
     *
     */
    public void genesis()
    {
        //create a x by y grid and add cells
        cells = new Cell [x][y];
        for (int i=0; i<x; i++)
        {
            for (int j=0; j<y; j++)
            {
                cells [i][j] = new Cell(i,j);
                cells [i][j].setSize(50,50);
                cells [i][j].setOpaque(true);
                cells [i][j].setBorderPainted(true);
                
                //cells [i][j].addActionListener(this);
                
                panel.add(cells [i][j]);
            }
        }
        
        //set the display
        getContentPane().add(panel);
        panel.setVisible(true);
        pack();
        
        panel.setLayout(new GridLayout(x,x,1,1));
        
        //housekeeping
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setResizable(false);
        setVisible(true);
    }
    
    /**
     * Iterate moves on to the next gen however many times
     */
    public void iterate()
    {
        //go through all cells in the grid
        for (int i=0; i<x; i++)
        {
            for (int j=0; j<y; j++)
            {
                //find the cell's alive neighbours and determine their
                //next state
                cells[i][j].nextGen(neighbourhood(i, j));
            }
        }
        //after all cells to be done, give time to demonstrate change
        try
        {
            Thread.sleep(200);
        }
        catch(InterruptedException ex)
        {
            Thread.currentThread().interrupt();
        }
        //update display to the next gen
        for (int i = 0; i<x; i++)
        {
            for (int j=0; j<y; j++)
            {
                cells[i][j].update();
            }
        }
    }
    
    /**
     * Neighbourhood calculates how many alive cells there are in a given
     * cell's neighbourhood
     * 
     * @param int row, int col
     * @return the number of alive cells
     */
    private int neighbourhood(int row,int col)
    {
        int neighbours = 0;
        //go through north, west, east, and south cells adjacent to the cell
        for (int i=(row-1); i<=(row+1); i++)
        {
            int R = i;
            //if the cell is at the top, the bottom cells become its neighbours
            if (R == -1)
            {
                R = x-1;
            }
            //if the cell is at the bottom, the top cells become its neighbours
            else if (R == x)
            {
                R = 0;
            }
            for (int j=(col-1); j<=(col+1); j++)
            {
                //if its the given cell, skip
                if (i==row && j==col){continue;}
                //if the cell is at the leftmost column, cells on the 
                //rightmost side of the grid become its neighbours
                int C = j;
                if (C==-1)
                {
                    C = y-1;
                }
                //if the cell is at the rightmost column, cells on the
                //leftmost side of the grid become its neighbours
                else if (C==y)
                {
                    C = 0;
                }
                //if the neighbouring cell is alive, add to the count
                if (cells[R][C].getState() == 1)
                {
                    neighbours += 1;
                }
            }
        }
        return neighbours;
    }
    
    private void pulsar()
    {
        //set state of select cells
        cells[2][4].setState(1);
        cells[2][5].setState(1);
        cells[2][6].setState(1);
        cells[2][10].setState(1);
        cells[2][11].setState(1);
        cells[2][12].setState(1);
        
        cells[4][2].setState(1);
        cells[4][7].setState(1);
        cells[4][9].setState(1);
        cells[4][14].setState(1);
        cells[5][2].setState(1);
        cells[5][7].setState(1);
        cells[5][9].setState(1);
        cells[5][14].setState(1);
        cells[6][2].setState(1);
        cells[6][7].setState(1);
        cells[6][9].setState(1);
        cells[6][14].setState(1);
        
        cells[7][4].setState(1);
        cells[7][5].setState(1);
        cells[7][6].setState(1);
        cells[7][10].setState(1);
        cells[7][11].setState(1);
        cells[7][12].setState(1);
        
        cells[9][4].setState(1);
        cells[9][5].setState(1);
        cells[9][6].setState(1);
        cells[9][10].setState(1);
        cells[9][11].setState(1);
        cells[9][12].setState(1);
        
        cells[10][2].setState(1);
        cells[10][7].setState(1);
        cells[10][9].setState(1);
        cells[10][14].setState(1);
        cells[11][2].setState(1);
        cells[11][7].setState(1);
        cells[11][9].setState(1);
        cells[11][14].setState(1);
        cells[12][2].setState(1);
        cells[12][7].setState(1);
        cells[12][9].setState(1);
        cells[12][14].setState(1);
        
        cells[14][4].setState(1);
        cells[14][5].setState(1);
        cells[14][6].setState(1);
        cells[14][10].setState(1);
        cells[14][11].setState(1);
        cells[14][12].setState(1);
    }
    
    private void spaceship()
    {
        cells[2][1].setState(1);
        cells[2][3].setState(1);
        
        cells[3][4].setState(1);
        cells[4][4].setState(1);
        cells[5][1].setState(1);
        cells[5][4].setState(1);
        
        cells[6][2].setState(1);
        cells[6][3].setState(1);
        cells[6][4].setState(1);
    }
    
    private void random()
    {
        Random rand = new Random();
        int rand1 = rand.nextInt(x-1);
        Random rando = new Random();
        int rand2 = rando.nextInt(x-1);
        for (int i=0; i<(x*x*0.75); i++)
        {
            cells[rand1][rand2].setState(1);
            rand1 = rand.nextInt(x-1);
            rand2 = rand.nextInt(x-1);
        }
    }
}
