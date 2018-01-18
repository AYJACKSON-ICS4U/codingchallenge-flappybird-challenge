## Coding Challenge # 31 - Flappy Bird


# What is it?

In this coding challenge, Dan Shiffman shows us how to create a basic desktop version of Flappy bird. He codes with 4 different files:

  - index.html for the actual browser
  - bird.js with the code for the bird
  - pipe.js with the code for the pipes
  - sketch.js which is the base file that brings all of the code together
  
The game works similarily to the phone app, where the player has to tap, or in this case push a button, to keep the bird flying (to make it go up), while it maneuvers through gaps in pipes that vary in position and in length. We code the pipes to be in an endless array, constantly moving from the right of the screen to the left.

# What variations did we make?

Dan left some suggestions at the end of the video for how we could make this project more advanced, and we went along with three of them.

  1) We changed the bird from being simply an ellipse to an actual bird, and added color in the background to make it look like it was flying through the sky.
  
  2) We looked through some of his other work to learn how to make the position of the pipes more randomized. We changed the pipe function so that the gap between pipes can be closer to the top or bottom of the screen, instead of just always being in the middle. It made the game more challenging and also less predictable.
  
  3) We added a counter function that would keep score for the user as  they play. Every time they successfully meneuvered through a pipe, their score would go up. If they hit a pipe, their score resets back at zero. So the object of the game is to see how  high your score can become.
