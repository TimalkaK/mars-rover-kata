import {checkRoverIsOnMars, Rover, moveRover, rotateRover,checkRoverPosition } from "../src/rover/rover";

describe("test checkRoverPosition function", () => {
  it("should return co-ordinates ", () => {
    const rover : Rover = {x:0, y:0, orientation:"N"};
    expect(checkRoverPosition(rover)).toBe("0 0 N");
  }); it("should return co-ordinates ", () => {
    const rover : Rover = {x:1, y:2, orientation:"E"};
    expect(checkRoverPosition(rover)).toBe("1 2 E");
  });
});

describe("test checkRoverIsOnMars function", () => {
  it("should return rover is not on mars", () => {
    const rover : Rover = {x:-1, y:4, orientation:"N"};
    expect(checkRoverIsOnMars(rover)).toBe("Oh no! The rover is not on Mars");
  }); it("should return rover is not on mars", () => {
    const rover : Rover = {x:-1, y:-5, orientation:"N"};
    expect(checkRoverIsOnMars(rover)).toBe("Oh no! The rover is not on Mars");
  }); it("should return rover is not on mars", () => {
    const rover : Rover = {x:3, y:-1, orientation:"N"};
    expect(checkRoverIsOnMars(rover)).toBe("Oh no! The rover is not on Mars");
  }); it("should return rover is on mars", () => {
    const rover : Rover = {x:1, y:2, orientation:"E"};
    expect(checkRoverIsOnMars(rover)).toBe("Don't worry, The rover is safely on Mars");
  }); it("should return rover is on mars", () => {
    const rover : Rover = {x:5, y:5, orientation:"E"};
    expect(checkRoverIsOnMars(rover)).toBe("Don't worry, The rover is safely on Mars");
  }); it("should return rover is on mars", () => {
    const rover : Rover = {x:4, y:2, orientation:"E"};
    expect(checkRoverIsOnMars(rover)).toBe("Don't worry, The rover is safely on Mars");
  }); it("should return rover is on mars", () => {
    const rover : Rover = {x:0, y:0, orientation:"E"};
    expect(checkRoverIsOnMars(rover)).toBe("Don't worry, The rover is safely on Mars");
  });
});


describe("test rotateRover function", () => {
  it("should identify M is not a rotation instruction ", () => {
    const rover : Rover = {x:0, y:0, orientation:"N"};
    expect(rotateRover(rover,"M")).toBe("Not a rotation instruction");
  }); it("should rotate left to E ", () => {
    const rover : Rover = {x:0, y:0, orientation:"N"};
    expect(rotateRover(rover, "L")).toBe("0 0 E");
  }); it("should rotate left to S ", () => {
    const rover : Rover = {x:0, y:0, orientation:"E"};
    expect(rotateRover(rover,"L")).toBe("0 0 S");
  });it("should rotate left to W ", () => {
    const rover : Rover = {x:0, y:0, orientation:"S"};
    expect(rotateRover(rover,"L")).toBe("0 0 W");
  });it("should rotate left to N ", () => {
    const rover : Rover = {x:0, y:0, orientation:"W"};
    expect(rotateRover(rover,"L")).toBe("0 0 N");
  });it("should rotate right to W ", () => {
    const rover : Rover = {x:0, y:0, orientation:"N"};
    expect(rotateRover(rover,"R")).toBe("0 0 W");
  });it("should rotate right to S ", () => {
    const rover : Rover = {x:0, y:0, orientation:"W"};
    expect(rotateRover(rover,"R")).toBe("0 0 S");
  });it("should rotate right to E ", () => {
    const rover : Rover = {x:0, y:0, orientation:"S"};
    expect(rotateRover(rover,"R")).toBe("0 0 E");
  });it("should rotate right to N", () => {
    const rover : Rover = {x:0, y:0, orientation:"E"};
    expect(rotateRover(rover,"R")).toBe("0 0 N");
  });
  
});


describe("test moveRover function", () => {
  it("should return co-ordinates when moving north", () => {
    const rover : Rover = {x:0, y:0, orientation:"N"};
    expect(moveRover(rover, "M")).toBe("0 1 N");
  }); it("should return co-ordinates when moving east ", () => {
    const rover : Rover = {x:0, y:0, orientation:"E"};
    expect(moveRover(rover,"M")).toBe("1 0 E");
  });it("should return co-ordinates when moving west ", () => {
    const rover : Rover = {x:2, y:3, orientation:"W"};
    expect(moveRover(rover,"M")).toBe("1 3 W");
  });it("should return co-ordinates when moving south ", () => {
    const rover : Rover = {x:4, y:5, orientation:"S"};
    expect(moveRover(rover,"M")).toBe("4 4 S");
  });
});
