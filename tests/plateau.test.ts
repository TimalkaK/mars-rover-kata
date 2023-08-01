import { checkPlateauPerimeter } from "../src/plateau/plateau";

describe("test checkPlateauPerimeter function", () => {
  it("should return max co-ordinates 5,5", () => {
    expect(checkPlateauPerimeter(5,5)).toBe("5,5");
  }); it("should upper left co-ordinates", () => {
    expect(checkPlateauPerimeter(5,0)).toBe("5,0");
  });
  it("should return upper right co-ordinates", () => {
    expect(checkPlateauPerimeter(0,5)).toBe("0,5");
  });
  it("should return min co-ordinates", () => {
    expect(checkPlateauPerimeter(0,0)).toBe("0,0");
  });
  it("should return out of plateau perimeter", () => {
    expect(checkPlateauPerimeter(-1,3)).toBe("Out of Plateau Perimeter");
  });
  it("should return out of plateau perimeter", () => {
    expect(checkPlateauPerimeter(2,-3)).toBe("Out of Plateau Perimeter");
  });
  it("should return out of plateau perimeter", () => {
    expect(checkPlateauPerimeter(6,-2)).toBe("Out of Plateau Perimeter");
  });
  it("should return out of plateau perimeter", () => {
    expect(checkPlateauPerimeter(2,7)).toBe("Out of Plateau Perimeter");
  });
  it("should return coordinates within plateau", () => {
    expect(checkPlateauPerimeter(2,3)).toBe("Co-ordinates 2,3 are within the Plateau");
  });
  it("should return coordinates within plateau", () => {
    expect(checkPlateauPerimeter(4,4)).toBe("Co-ordinates 4,4 are within the Plateau");
  });
  
});
