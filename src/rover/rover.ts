type Direction = "N" | "E" | "S" | "W";
type Rover = {x: number, y: number, orientation: Direction};

const rover1: Rover = {x:0,y:0,orientation:"N"};

export function checkRoverPostion(r: Rover): boolean {
  return true;
}
