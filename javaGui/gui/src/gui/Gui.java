
package gui;
import javax.swing.*;


public class Gui {

   
    public static void main(String[] args) {
        JFrame f = new JFrame();
        
        JButton b = new JButton("Click");
                
        b.setBounds(180, 180, 160, 90);
        f.add(b);
        f.setSize(600,400);
        f.setLayout(null);
        f.setVisible(true);
        
    }
    
}
