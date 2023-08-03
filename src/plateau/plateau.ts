export function isInPlateauPerimeter(x: number, y: number): boolean {
  if (x < 0 || x > 5 || y < 0 || y > 5){
    return false;
  }else{
    return true;
  }
}