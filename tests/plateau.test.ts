import { checkPlateauPerimeter } from "../src/plateau/plateau";

describe("test checkPlateauPerimeter function", () => {
  it("should return max co-ordinates 5,5 for checkPlateauPerimeter(5,5)", () => {
    expect(checkPlateauPerimeter(5, 5)).toBe("5,5");
  }); it("should upper left co-ordinates for checkPlateauPerimeter(5,0)", () => {
    expect(checkPlateauPerimeter(5, 0)).toBe("5,0");
  });
  it("should return upper right co-ordinates for checkPlateauPerimeter(0,5)", () => {
    expect(checkPlateauPerimeter(0, 5)).toBe("0,5");
  });
  it("should return min co-ordinates for checkPlateauPerimeter(0,0)", () => {
    expect(checkPlateauPerimeter(0, 0)).toBe("0,0");
  });
  it("should return false for checkPlateauPerimeter(2,3)", () => {
    expect(checkPlateauPerimeter(2, 3)).toBe("Out of Plateau Perimeter");
  });
  
});
