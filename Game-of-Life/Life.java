import javax.swing.*;
import java.awt.event.*;
/**
 * Life is the driver class to start a selected configuration for Conway's
 * Game of Life
 *
 * @author (Munyaradzi Siyawamwaya)
 * @version (1 - 24/09/20)
 */
public class Life
{
    /**
     * Constructor for objects of class Life
     */
    public static void main(String[] args)
    {
        Grid land = new Grid(Integer.parseInt(args[0]), 
        Integer.parseInt(args[1]), args[2]);
    }
}
