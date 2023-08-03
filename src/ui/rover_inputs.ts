 import { isInPlateauPerimeter } from "../plateau/plateau";
 import { Rover, Direction, Instruction, checkRoverPostion, rotateRover, moveRover, checkRoverIsOnMars } from "../rover/rover";

 let rover : Rover;
 let roverPosition: string;

 export function checkCoordinates(x: number, y: number){
  if (isInPlateauPerimeter(x, y) === true){
     return true;
   }else{
     return false;
   }
  }

 export function inputMaxPlateau(input: string){
  let [x, y] = input.split(" ", 2);
  let coordX = parseInt(x);
  let coordY = parseInt(y);

  if (isNaN(coordX|| coordY)){
		return undefined;
  }//refactor checkCoordinates as you can just use isInPlateau straight away
  if (checkCoordinates(coordX, coordY) === true){
		return `Recieved Right Upper Coordinates: ${coordX},${coordY}`
  }else{
    return 'Coordinates are out of plateau perimeter';
  }
 }

 export function inputRoverPosition(input: String): string | undefined{
  let [x, y, compassPoint] = input.split(" ", 3);
  let coordX = parseInt(x);
  let coordY = parseInt(y);
  let direction: Direction = compassPoint as Direction;

  
  if (isNaN(coordX|| coordY)){
		return undefined;
  }

  if (checkCoordinates(coordX, coordY) === true){
    rover = {x: coordX, y: coordY, orientation: direction};
  }else{
    return 'Oh no! The rover is not on Mars';
  }

  roverPosition = checkRoverPostion(rover);
  console.log(rover);
  return roverPosition;
}

 // user input: instructions : LMLMLM
 // a function called inputInstructions and output returns: final coordinates of rover 
 //each rover done one at a time 
 // make sure initial rover position is correct
 // issue with global variable 

 export function inputInstructions(input: string){
   console.log(`Current position: ${roverPosition}`);

  let instructions = input.split('');
  if (instructions.length === 0){
    return 0;
  }
  instructions.forEach((instruction) => {
    if(instruction === "L"){
      const rotateLeft = rotateRover(rover,"L");
      //console.log(rotateLeft);
    }else if(instruction === "R"){
      const rotateRight = rotateRover(rover, "R");
      //console.log(rotateRight);
    }else if (instruction === "M"){
      const move = moveRover(rover, "M");
      //console.log(move);
    }else{
      return undefined;
    }

    if (checkRoverIsOnMars(rover) === "Don't worry! The rover is safely on Mars"){
     roverPosition = checkRoverPostion(rover);
      //console.log(roverPosition);
    }else{
      console.log("Rover is not on Mars");
      return "0";
    }

    console.log(`Changed position ${roverPosition}`);
    return roverPosition;
    
   
  })
 }