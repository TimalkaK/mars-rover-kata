type Grid = { x: number, y: number };

export function upperRight(x: number, y: number): boolean{

  const maxCoordinates: Grid = {x:5,y:5};

  if (x === maxCoordinates.x && y === maxCoordinates.y){
    //console.log(maxCoordinates);
    return true;
  }else{
    return false;
  }
}

export function upperLeft(x: number, y: number): boolean {

  const minCoordinates: Grid = {x:0, y:5};

  return true ;
}

export function lowerRight(x: number, y: number): boolean {

  const minCoordinates: Grid = {x:5, y:0};

  return true ;
}

export function lowerLeft(x: number, y: number): boolean {

  const minCoordinates: Grid = {x:0, y:0};

  return true ;
}