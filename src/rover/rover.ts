type Direction = "N" | "E" | "S" | "W";
export type Rover = {x: number, y: number, orientation: Direction};


export function checkRoverPostion(rover: Rover): string {

  return `${rover.x} ${rover.y} ${rover.orientation}`;
}

type Instruction = "L" | "R" | "M";

export function rotateRover(rover: Rover, instruction : Instruction): string | undefined{
 switch (instruction){
  case "L": {
    switch(rover.orientation){
      case "N": rover.orientation = "E"; return `${rover.x} ${rover.y} ${rover.orientation}`;
      case "E": rover.orientation = "S"; return `${rover.x} ${rover.y} ${rover.orientation}`;
      case "S": rover.orientation = "W"; return `${rover.x} ${rover.y} ${rover.orientation}`;
      case "W": rover.orientation = "N"; return `${rover.x} ${rover.y} ${rover.orientation}`;
    }
  }
  case "R": {
    switch(rover.orientation){
      case "N": rover.orientation = "W"; return `${rover.x} ${rover.y} ${rover.orientation}`;
      case "E": rover.orientation = "N"; return `${rover.x} ${rover.y} ${rover.orientation}`;
      case "S": rover.orientation = "E"; return `${rover.x} ${rover.y} ${rover.orientation}`;
      case "W": rover.orientation = "S"; return `${rover.x} ${rover.y} ${rover.orientation}`;
    }
  }
  case "M": 
    return "Not a rotation instruction";
 }
}

export function moveRover(rover: Rover, instruction : Instruction): string  | undefined{
  if(instruction === "M"){
    switch(rover.orientation){
      case "N": rover.y++; return `${rover.x} ${rover.y} ${rover.orientation}`;
      case "E": rover.x++; return `${rover.x} ${rover.y} ${rover.orientation}`;
      case "S": rover.y--; return `${rover.x} ${rover.y} ${rover.orientation}`;
      case "W": rover.x--; return `${rover.x} ${rover.y} ${rover.orientation}`;
    }
  }
}
