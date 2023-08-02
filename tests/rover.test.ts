import { rotateRover,checkRoverPostion } from "../src/rover/rover";

describe("test checkRoverPostion function", () => {
  it("should return co-ordinates ", () => {
    expect(checkRoverPostion(0,0,"N")).toBe("0 0 N");
  }); it("should return co-ordinates ", () => {
    expect(checkRoverPostion(1,2,"E")).toBe("1 2 E");
  });
});


describe("test rotateRover function", () => {
  it("should return  ", () => {
    expect(rotateRover("M")).toBe("Not a rotation instruction");
  }); it("should return co-ordinates ", () => {
    expect(rotateRover("R")).toBe("Not a rotation instruction");
  });
});