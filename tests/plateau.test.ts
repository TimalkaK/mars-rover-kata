import { isInPlateauPerimeter } from "../src/plateau/plateau";

describe("test isInPlateauPerimeter function", () => {
  it("should return out of plateau perimeter", () => {
    expect(isInPlateauPerimeter(-1,3)).toBe(false);
  });
  it("should return out of plateau perimeter", () => {
    expect(isInPlateauPerimeter(2,-3)).toBe(false);
  });
  it("should return out of plateau perimeter", () => {
    expect(isInPlateauPerimeter(6,-2)).toBe(false);
  });
  it("should return out of plateau perimeter", () => {
    expect(isInPlateauPerimeter(2,7)).toBe(false);
  });
  it("should return coordinates within plateau", () => {
    expect(isInPlateauPerimeter(2,3)).toBe(true);
  });
  it("should return coordinates within plateau", () => {
    expect(isInPlateauPerimeter(4,4)).toBe(true);
  });  it("should return coordinates within plateau", () => {
    expect(isInPlateauPerimeter(5,5)).toBe(true);
  }); it("should return coordinates within plateau", () => {
    expect(isInPlateauPerimeter(5,0)).toBe(true);
  });
  it("should return coordinates within plateau", () => {
    expect(isInPlateauPerimeter(0,5)).toBe(true);
  });
  it("should return coordinates within plateau", () => {
    expect(isInPlateauPerimeter(0,0)).toBe(true);
  });
  
});
