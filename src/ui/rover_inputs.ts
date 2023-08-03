import { isInPlateauPerimeter } from "../plateau/plateau";
import { Rover, Direction, Instruction, checkRoverPostion, rotateRover, moveRover, checkRoverIsOnMars } from "../rover/rover";

export function inputMaxPlateau(input: string){
  let [x, y] = input.split(" ", 2);
  let coordX = parseInt(x);
  let coordY = parseInt(y);

  if (isNaN(coordX|| coordY)){
    return undefined;
  }

  if (isInPlateauPerimeter(coordX, coordY) === true){
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
  let rover : Rover = {x: coordX, y: coordY, orientation: direction};
  return updateRoverPosition(rover);
}

export function inputInstructions(rover: Rover, input: string): string {
  let instructions = input.split('');
  if (instructions.length === 0){
    return "Empty instructions";
  }

  for (const instruction of instructions) {
    if(instruction === "L"){
      let rotateLeft = rotateRover(rover,"L");
    }else if(instruction === "R"){
      let rotateRight = rotateRover(rover, "R");
    }else if (instruction === "M"){
      let move = moveRover(rover, "M");;
    }else{
      return "Incorrect instruction found";
    }
  }
  
  return updateRoverPosition(rover);
}


export function updateRoverPosition(rover: Rover): string {
  if (checkRoverIsOnMars(rover) === "Don't worry! The rover is safely on Mars"){
    return checkRoverPostion(rover);
  }else{
    return checkRoverIsOnMars(rover);
  }
}

    
  