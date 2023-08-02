type Direction = "N" | "E" | "S" | "W";
type Rover = {x: number, y: number, orientation: Direction};

const rover1: Rover = {x:0, y:0, orientation:"N"};

export function checkRoverPostion(): string {
  console.log(rover1);
  return `${rover1.x} ${rover1.y} ${rover1.orientation}`;
}
