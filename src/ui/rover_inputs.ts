 import { isInPlateauPerimeter } from "../plateau/plateau";
 import { Rover, Direction, Instruction, checkRoverPostion, rotateRover, moveRover, checkRoverIsOnMars } from "../rover/rover";

//  export function checkCoordinates(x: number, y: number){
//   if (isInPlateauPerimeter(x, y) === true){
//      return true;
//    }else{
//      return false;
//    }
//   }

 export function inputMaxPlateau(input: string){
  let [x, y] = input.split(" ", 2);
  let coordX = parseInt(x);
  let coordY = parseInt(y);

  if (isNaN(coordX|| coordY)){
		return undefined;
  }//refactor checkCoordinates as you can just use isInPlateau straight away
  if (isInPlateauPerimeter(coordX, coordY) === true){
		return `Recieved Right Upper Coordinates: ${coordX},${coordY}`
  }else{
    return 'Coordinates are out of plateau perimeter';
  }
 }

 export function inputRoverPosition(input: String): string | undefined{
  let roverPosition = "";
  let [x, y, compassPoint] = input.split(" ", 3);
  let coordX = parseInt(x);
  let coordY = parseInt(y);
  let direction: Direction = compassPoint as Direction;

  
  if (isNaN(coordX|| coordY)){
		return undefined;
  }

  if (isInPlateauPerimeter(coordX, coordY) === true){
    let rover : Rover = {x: coordX, y: coordY, orientation: direction};
    roverPosition = checkRoverPostion(rover);
    //inputInstructions function
  }else{
    return 'Oh no! The rover is not on Mars';
  }
  
  console.log(roverPosition);
  return roverPosition;
}

 // user input: instructions : LMLMLM
 // a function called inputInstructions and output returns: final coordinates of rover 
 //each rover done one at a time 
 // make sure initial rover position is correct
 // issue with global variable 

 export function inputInstructions(rover: Rover, input: string): string {
  let instructions = input.split('');
  if (instructions.length === 0){
    return "Empty instructions";
  }

  for (const instruction of instructions) {
    if(instruction === "L"){
      let rotateLeft = rotateRover(rover,"L");
      //console.log(rotateLeft);
      // updateRoverPosition function
    }else if(instruction === "R"){
      let rotateRight = rotateRover(rover, "R");
      //console.log(rotateRight);
    }else if (instruction === "M"){
      let move = moveRover(rover, "M");;
      //console.log(move);
    }else{
      return "Incorrect instruction found";
    }
  }

  console.log(checkRoverPostion(rover));
  return checkRoverPostion(rover);
}

// updateRoverPosition function
// let roverPosition = "";
    // if (checkRoverIsOnMars(rover) === "Don't worry! The rover is safely on Mars"){
    //   roverPosition = checkRoverPostion(rover);
    //   console.log(roverPosition);
    // }else{
    //   //console.log("Rover is not on Mars");
    //   return "Rover is not on Mars";
    // }
    // return roverPosition;
    
  