type Direction = "N" | "E" | "S" | "W";
type Rover = {x: number, y: number, orientation: Direction};

let rover1: Rover = {x:0, y:0, orientation:"N"};

export function checkRoverPostion(coordX: number, coordY: number , o: Direction): string {

  rover1 = {x: coordX, y: coordY, orientation: o};

  return `${rover1.x} ${rover1.y} ${rover1.orientation}`;
}

type Instruction = "L" | "R" | "M";

// function to rotate rover
export function rotateRover(instruction : Instruction): string{

  return "Blah";

}

// function to move rover 