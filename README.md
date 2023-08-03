# Mars Rover Kata 

## Introduction
This application is intended to move rover's around Mars. 

## Features
A rover moves around a Mar's Plateau which is a 5x5 grid with lower coordinates (0,0) and upper right coordinates (5,5).
The rover can rotate in four directions - north, south, east and west. According to it's direction the rover will move to a new coordinate in the plateau using the instructions left (L),right (R) and move (M).

## Approaches
- initially I drew out the plateau and rover to get a visual idea, I also drew a grid with compass directions to better understand what the application will do and how to approach it.
- I also jotted down some notes from the documents provides and created my files like in the examples given
- I began writing a simple test case for the plateau file to write code for it. 
- I then created the plateau boundary to ensure that I could check if future coordinates were in the plateau
- I then wrote test cases and my logic for the rover with a rotate and move functions but also check functions to make sure that the rover was on mars and to retrieve its position easily
- I then created a rover input file to create input functions which can be later turned into or used for a nice UI 


## Assumptions
- I decided to separate out files into plateau, rover and ui folders so that more logic can be added in the future and it is easy to read and find code.



## Future Thoughts 
- I would like to create a UI so that input's can be typed by a user and feedback can be returned to the user
- I would like to accomdate more rovers and different plateau shapes 
- I would like to ensure all edge cases are tested to better 'bullet-proof' the code.
