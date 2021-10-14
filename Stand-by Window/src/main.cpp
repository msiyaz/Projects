
#include <SFML/Graphics.hpp>
#include <iostream>

float bouncingx(sf::CircleShape circle, float speed){
    float xspeed = speed; 
        if (circle.getPosition().x > 700 ){
            xspeed = -speed;
        }
        if (circle.getPosition().x < 0){
            xspeed = -speed;
        }
    return xspeed;
}

float bouncingy(sf::CircleShape circle, float speed){
        float yspeed = speed; 
        if (circle.getPosition().y > 500){
            yspeed = -speed;
        }
        if (circle.getPosition().y < 0){
            yspeed = -speed;
        }
        return yspeed;
}
float bouncingxx(sf::RectangleShape rectangle, float speed){
    float xspeed = speed; 
        if (rectangle.getPosition().x > 700 ){
            xspeed = -speed;
        }
        if (rectangle.getPosition().x < 0){
            xspeed = -speed;
        }
    return xspeed;
}

float bouncingyy(sf::RectangleShape rectangle, float speed){
        float yspeed = speed; 
        if (rectangle.getPosition().y > 500){
            yspeed = -speed;
        }
        if (rectangle.getPosition().y < 0){
            yspeed = -speed;
        }
        return yspeed;
}

int main(int argc, char * argv[])
{
    // create a new window of size 800 by 600 pixels
    // top-left of the window is (0,0) and bottom-right is (wWidth,hHeight)
    const int wWidth = 800;
    const int wHeight = 600;
    sf::RenderWindow window(sf::VideoMode(wWidth, wHeight), "Stand-by");
                                   
    // let's make a shape that we will draw to the screen
    sf::CircleShape circle1(50);             // create a circle shape with radius 50
    circle1.setFillColor(sf::Color::Green);  // set the circle color to green
    circle1.setPosition(300.0f, 300.0f);     // set the top-left position of the circle
    float circle1MoveSpeed = -0.08f;          //this will be used to move the shape

    sf::CircleShape circle2(20);             
    circle2.setFillColor(sf::Color::Blue);  
    circle2.setPosition(150.0f, 300.0f);     
    float circle2MoveSpeed = 0.08f;          

    sf::CircleShape circle3(80);
    circle3.setFillColor(sf::Color(255,0,255));  
    circle3.setPosition(600.0f, 400.0f);     
    float circle3MoveSpeed = 0.2f;          

    sf::RectangleShape rectangle1(sf::Vector2f(50,25)); // Create a rectangle with length 50 and width 25
    rectangle1.setFillColor(sf::Color::Red); // set color to red
    rectangle1.setPosition(600.0f, 400.0f);// these are the starting position of the shaoe
    float rectangle1MoveSpeed = 0.1f;     // this will be used to move the shape

       sf::RectangleShape rectangle2(sf::Vector2f(150,60));
    rectangle1.setFillColor(sf::Color(100,100,100));
    rectangle1.setPosition(600.0f, 400.0f);
    float rectangle2MoveSpeed = -0.05f;

       sf::RectangleShape rectangle3(sf::Vector2f(100,80));
    rectangle3.setFillColor(sf::Color(0,255,255));
    rectangle3.setPosition(600.0f, 400.0f);
    float rectangle3MoveSpeed = 0.01f;
    sf::Font myFont;  

    float x1move = circle1MoveSpeed;
    float y1move = circle1MoveSpeed;  
    float x2move = circle2MoveSpeed;
    float y2move = circle2MoveSpeed;
    float x3move = circle3MoveSpeed;
    float y3move = circle3MoveSpeed;  

    float x1speed = rectangle1MoveSpeed;
    float y1speed = rectangle1MoveSpeed;
    float x2speed = rectangle2MoveSpeed;
    float y2speed = rectangle2MoveSpeed;
    float x3speed = rectangle3MoveSpeed;
    float y3speed = rectangle3MoveSpeed;
    while (window.isOpen())
    {
        // event handling 
        sf::Event event;
        while (window.pollEvent(event))
        {
            // this event triggers when the window is closed
            if (event.type == sf::Event::Closed)
            {
                window.close();
            }
        }
                             
        // basic animation - move the each frame if it's still in frame
        circle1.setPosition(circle1.getPosition() + sf::Vector2f(x1move, y1move));
        circle2.setPosition(circle2.getPosition() + sf::Vector2f(x2move, y2move));
        circle3.setPosition(circle3.getPosition() + sf::Vector2f(x3move, y3move));
        rectangle1.setPosition(rectangle1.getPosition() + sf::Vector2f(x1speed,y1speed));
        rectangle2.setPosition(rectangle2.getPosition() + sf::Vector2f(x2speed,y2speed));
        rectangle3.setPosition(rectangle3.getPosition() + sf::Vector2f(x3speed,y3speed));

        x1move = bouncingx(circle1, x1move);
        y1move = bouncingy(circle1, y1move);
        x2move = bouncingx(circle2, x2move);
        y2move = bouncingy(circle2, y2move);
        x3move = bouncingx(circle3, x3move);
        y3move = bouncingy(circle3, y3move);

        x1speed = bouncingxx(rectangle1, x1speed);
        y1speed = bouncingyy(rectangle1, y1speed);
        x2speed = bouncingxx(rectangle2, x2speed);
        y2speed = bouncingyy(rectangle2, y2speed);
        x3speed = bouncingxx(rectangle3, x3speed);
        y3speed = bouncingyy(rectangle3, y3speed);

        // basic rendering function calls
        window.clear();         // clear the window of anything previously drawn
        window.draw(circle1);    // draw the circle
        window.draw(circle2);
        window.draw(circle3);
        window.draw(rectangle1); // Draw rectangle 
        window.draw(rectangle2);
        window.draw(rectangle3);
        window.display();       // call the window display function
    }
    return 0;

}


