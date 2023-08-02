 import { isInPlateauPerimeter } from "../plateau/plateau";
 import { Rover, Direction, checkRoverPostion } from "../rover/rover";
 
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
  }

  if (checkCoordinates(coordX, coordY) === true){
		return `Recieved Right Upper Coordinates: ${coordX},${coordY}`
  }else{
    return 'Coordinates are out of plateau perimeter';
  }
 }


 // user input: rover coordinates and orientation e.g 1 2 N
 // a function called inputRoverPosition
 // input is a string so need to separate out x y and o to put into rover 

 export function inputRoverPosition(input: String): string | undefined{
  let [x, y, compassPoint] = input.split(" ", 3);
  let coordX = parseInt(x);
  let coordY = parseInt(y);
  let direction: Direction = compassPoint as Direction;

  
  if (isNaN(coordX|| coordY)){
		return undefined;
  }

  if (checkCoordinates(coordX, coordY) === true){
    let rover : Rover = {x: coordX, y: coordY, orientation: direction};
    const roverPosition = checkRoverPostion(rover);
    return roverPosition;
 }else{
  return 'Oh no! The rover is not on Mars';
  }
}

 
 // user input: instructions : LMLMLM
 // a function called inputInstructions and output returns: final coordinates of rover 
 //each rover done one at a time 