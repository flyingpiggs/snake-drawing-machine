# Snake Drawing Machine

*Instructor: Dr. Tiffany Funk*

*Assignment: Drawing Machine*

*Peter Chen, chen172*

*Link to webpage:*
https://flyingpiggs.github.io/snake-drawing-machine/

### Prompt Given (paraphrased)
> Allow the user to interact with the drawing machine using at least the mouse and optionally keyboard too 
> The drawing machine should respond by drawing "stuff"
> The drawing machine will require user input to start, but the response to the input should be independent

I found a [snake game](https://p5js.org/examples/interaction-snake-game.html) in the p5.js examples and modified it to suit 
my purposes. I removed all the "dangerous" parts of the game so it's not possible to die anymore. 
If you go off the edge of the map, there's code written to stop the snake from moving, and it should
return back onto the map once it's directed. This part might be a bit buggy since I haven't tested it much.
It's actually not working the way I expected, but it achieves the original purpose of not letting the player die.

Move the snake using ijkl or the arrow keys. 'P' pauses the game, 'O' resumes it, and use 's' to take a screenshot. 

The mouse is used to drop extra fruits for the snake to eat, and these extra fruits will trigger shapes being 
drawn once they're eaten (The original fruits from the sample snake game just make the snake bigger).
The 'Q' key controls the type of shape being drawn while the 'W' key controls the path that the shape moves 
along. 
