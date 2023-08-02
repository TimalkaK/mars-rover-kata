 import { isInPlateauPerimeter } from "../plateau/plateau";
 
 // user input: plateau max coords 5,5
 // a function called inputMaxPlateau
 // input is a string so need to separate out numbers 
 // maybe return true or  a string saying Upper right coordinates are defined

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

 export function checkCoordinates(x: number, y: number){
 if (isInPlateauPerimeter(x, y) === true){
    return true;
  }else{
    return false;
  }

 }

 // user input: rover coordinates and orientation e.g 1 2 N
 // a function called inputRoverPosition
 // input is a string so need to separate out x y and o to put into rover 

 export function inputRoverPosition(input: String){
  let [x, y, direction] = input.split(" ", 3);
  let coordX = parseInt(x);
  let coordY = parseInt(y);

  if (isNaN(coordX || coordY)) {
		return undefined;
  }else{
    isInPlateauPerimeter(coordX, coordY);
    return `${coordX},${coordY},${direction}`;
  }

 }

 
 // user input: instructions : LMLMLM
 // a function called inputInstructions and output returns: final coordinates of rover 
 //each rover done one at a time 