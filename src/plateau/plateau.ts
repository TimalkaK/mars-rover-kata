// type Grid = { x: number, y: number };
// const minCoord: Grid = {x:0, y:0};
// const upperLeftCoord: Grid = {x:5, y:0};
// const lowerRightCoord: Grid = {x:0, y:5};
// const maxCoord: Grid = {x:5,y:5};


// export function checkPlateauPerimeter(x: number, y: number): string | undefined {
//   if (x === maxCoord.x && y === maxCoord.y){
//     return "5,5";
//   }else if (x === upperLeftCoord.x && y === upperLeftCoord.y){
//     return "5,0";
//   }else if (x === lowerRightCoord.x && y === lowerRightCoord.y){
//     return "0,5";
//   }else if (x === minCoord.x && y === minCoord.y){
//     return "0,0";
//   }else if (x < 0 || x > 5 || y < 0 || y > 5){
//     return "Out of the Plateau Perimeter";
//   }else{
//     return `Co-ordinates ${x},${y} are within the Plateau`
//   }
// }

export function isInPlateauPerimeter(x: number, y: number): boolean {
  if (x < 0 || x > 5 || y < 0 || y > 5){
    return false;
  }else{
    return true;
  }
}