type Direction = "N" | "E" | "S" | "W";
type Rover = {x: number, y: number, orientation: Direction};

let rover1: Rover = {x:0, y:0, orientation:"N"};

export function checkRoverPostion(coordX: number, coordY: number , o: Direction): string {

  rover1 = {x: coordX, y: coordY, orientation: o};

  return `${rover1.x} ${rover1.y} ${rover1.orientation}`;
}

type Instruction = "L" | "R" | "M";

export function rotateRover(instruction : Instruction): string | undefined{
 switch (instruction){
  case "L": {
    switch(rover1.orientation){
      case "N": rover1.orientation = "E"; return `${rover1.x} ${rover1.y} ${rover1.orientation}`;
      case "E": rover1.orientation = "S"; return `${rover1.x} ${rover1.y} ${rover1.orientation}`;
      case "S": rover1.orientation = "W"; return `${rover1.x} ${rover1.y} ${rover1.orientation}`;
      case "W": rover1.orientation = "N"; return `${rover1.x} ${rover1.y} ${rover1.orientation}`;
    }
  }
  case "R": {
    switch(rover1.orientation){
      case "N": rover1.orientation = "W"; return `${rover1.x} ${rover1.y} ${rover1.orientation}`;
      case "E": rover1.orientation = "N"; return `${rover1.x} ${rover1.y} ${rover1.orientation}`;
      case "S": rover1.orientation = "E"; return `${rover1.x} ${rover1.y} ${rover1.orientation}`;
      case "W": rover1.orientation = "S"; return `${rover1.x} ${rover1.y} ${rover1.orientation}`;
    }
  }
  case "M": 
    return "Not a rotation instruction";
 }
}

 



// function to move rover 