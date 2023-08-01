import { upperRight } from "../src/plateau/plateau";

describe("test upperRight function", () => {
  it("should return max co-ordinate true for upperRight(5,5)", () => {
    expect(upperRight(5, 5)).toBe(true);
  }); it("should return false for upperRight(2,3)", () => {
    expect(upperRight(2, 3)).toBe(false);
  });
});