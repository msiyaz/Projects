import java.awt.Color;
import javax.swing.*;
/**
 * This class creates a cell
 *
 * @author (Munyaradzi Siyawamwaya)
 * @version (2 - 19/09/20)
 */
public class Cell extends JButton
{
    // instance variables
    private int x, y;  //cell's coordinates
    private int state; //current state
    private int next; //next state
    
    /**
     * Constructor for objects of class Cell
     */
    public Cell(int xcoord, int ycoord)
    {
        super();
        // initialise instance variables
        x = xcoord;
        y = ycoord;
        this.setBackground(Color.white);
        this.setSize(50,50);
        state = 0;
        flip();
    }

    /**
     * This method updates the state of the cell based on the states of its
     * neighbours
     *
     * @param  aliveCount  the number of alive cells in the neighbourhood
     */
    public void nextGen(int aliveCount)
    {
        int alive = aliveCount;
        //cell dies if less than 2 alive neighbours
        if (alive < 2)
        {
            next = 0;
        }
        //cell dies if more than 3 alive neighbours
        else if (alive > 3)
        {
            next = 0;
        }
        //cell is born if exactly 3 alive neighbours
        else if (alive == 3)
        {
            next = 1;
        }
        else
        {
            next = state;
        }
    }
    
    /**
     * update goes on to the next generation
     */
    public void update()
    {
        state = next;
        flip();
    }
    
    /**
     * Switch changes a white cell to black and a black cell to white
     */
    private void flip()
    {
        if (state == 0) //cell is dead
        {
            this.setBackground(Color.white);
        }
        else //cell is alive
        {
            this.setBackground(Color.black);
        }
        this.setBorderPainted(false);
    }
    
    /**
     * getState returns the state of the cell
     * 
     * @return the state of the cell
     */
    public int getState()
    {
        return state;
    }
    
    public void setState(int state)
    {
        this.state = state;
        flip();
    }
}