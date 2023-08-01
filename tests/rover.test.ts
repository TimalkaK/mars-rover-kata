import { checkRoverPostion } from "../src/rover/rover";

describe("test checkRoverPostion function", () => {
  it("should return true ", () => {
    expect(checkRoverPostion({x:0,y:0,orientation:"N"})).toBe(true);
  }); it("should return true ", () => {
    expect(checkRoverPostion({x:0,y:3,orientation:"N"})).toBe(true);
  });
});