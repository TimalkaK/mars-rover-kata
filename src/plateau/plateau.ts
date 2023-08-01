type Grid = { x: number, y: number };
const minCoord: Grid = {x:0, y:0};
const upperLeftCoord: Grid = {x:5, y:0};
const lowerRightCoord: Grid = {x:0, y:5};
const maxCoord: Grid = {x:5,y:5};


export function checkPlateauPerimeter(x: number, y: number): string | false{
  if (x === maxCoord.x && y === maxCoord.y){
    return "5,5";
  }else if (x === upperLeftCoord.x && y === upperLeftCoord.y){
    return "5,0";
  }else if (x === lowerRightCoord.x && y === lowerRightCoord.y){
    return "0,5";
  }else if (x === minCoord.x && y === minCoord.y){
    return "0,0";
  }else{
    return "Out of Plateau Perimeter"
  }
}

