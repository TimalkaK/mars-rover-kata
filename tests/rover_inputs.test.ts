import {checkCoordinates, inputMaxPlateau, inputRoverPosition } from "../src/ui/rover_inputs";

describe("test inputMaxPlateau function", () => {
  it("should return upper right coordinates recieved ", () => {
    const stringCoords : string = "5 5";
    expect(inputMaxPlateau(stringCoords)).toBe("Recieved Right Upper Coordinates: 5,5");
  }); it("should return undefined", () => {
    const stringCoords : string = "E M";
    expect(inputMaxPlateau(stringCoords)).toBe(undefined);
  });it("should return coordinates are out of perimeter ", () => {
    const stringCoords : string = "-3 4";
    expect(inputMaxPlateau(stringCoords)).toBe('Coordinates are out of plateau perimeter');
  });
});

describe("test checkCoordinates function", () => {
  it("should return true", () => {
    expect(checkCoordinates(5,5)).toBe(true);
  }); it("should return false", () => {
    expect(checkCoordinates(-1, 4)).toBe(false);
  });
});


describe("test inputRoverPosition function", () => {
  it("should return co-ordinates in a string array ", () => {
    const roverPosition : string = "1 2 N";
    expect(inputRoverPosition(roverPosition)).toBe("1,2,N");
  }); it("should return co-ordinates in an array ", () => {
    const roverPosition : string = "-1 3 E";
    expect(inputRoverPosition(roverPosition)).toBe("-1,3,E");
  });
  it("should return just three co-ordinates in a string array ", () => {
    const roverPosition : string = "2 4 W H T W M";
    expect(inputRoverPosition(roverPosition)).toBe("2,4,W");
  });
  it("should return undefined ", () => {
    const roverPosition : string = "E M W H T W M";
    expect(inputMaxPlateau(roverPosition)).toBe(undefined);
  });
});