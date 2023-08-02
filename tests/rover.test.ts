import { rotateRover,checkRoverPostion } from "../src/rover/rover";

describe("test checkRoverPostion function", () => {
  it("should return co-ordinates ", () => {
    expect(checkRoverPostion(0,0,"N")).toBe("0 0 N");
  }); it("should return co-ordinates ", () => {
    expect(checkRoverPostion(1,2,"E")).toBe("1 2 E");
  });
});


describe("test rotateRover function", () => {
  it("should identify M is not a rotation instruction ", () => {
    expect(rotateRover("M")).toBe("Not a rotation instruction");
  }); it("should rotate left to E ", () => {
    expect(rotateRover("L")).toBe("0 0 E");
  }); it("should rotate left to S ", () => {
    expect(rotateRover("L")).toBe("0 0 S");
  });it("should rotate left to W ", () => {
    expect(rotateRover("L")).toBe("0 0 W");
  });it("should rotate left to N ", () => {
    expect(rotateRover("L")).toBe("0 0 N");
  });it("should rotate right to W ", () => {
    expect(rotateRover("R")).toBe("0 0 W");
  });it("should rotate right to S ", () => {
    expect(rotateRover("R")).toBe("0 0 S");
  });it("should rotate right to E ", () => {
    expect(rotateRover("R")).toBe("0 0 E");
  });it("should rotate right to N", () => {
    expect(rotateRover("R")).toBe("0 0 N");
  });
  
});