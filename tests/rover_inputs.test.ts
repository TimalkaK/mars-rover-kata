import {inputInstructions, inputMaxPlateau, inputRoverPosition} from "../src/ui/rover_inputs";
import {Rover} from "../src/rover/rover";

// describe("test checkCoordinates function", () => {
//   it("should return true", () => {
//     expect(checkCoordinates(5,5)).toBe(true);
//   }); it("should return false", () => {
//     expect(checkCoordinates(-1, 4)).toBe(false);
//   });
// });


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

describe("test inputRoverPosition function", () => {
  it("should return string of rover position ", () => {
    const roverPosition : string = "1 2 N";
    expect(inputRoverPosition(roverPosition)).toBe("1 2 N");
  }); it("should return out of range coordinates ", () => {
    const roverPosition : string = "-1 3 E";
    expect(inputRoverPosition(roverPosition)).toBe('Oh no! The rover is not on Mars');
  });
  it("should return undefined ", () => {
    const roverPosition : string = "E M W H T W M";
    expect(inputMaxPlateau(roverPosition)).toBe(undefined);
  });
});

describe("test inputInstructions function", () => {
  it("should return 0", () => {
    const instructions : string = "";
    const rover : Rover = {x:1, y:2, orientation:"E"};
    expect(inputInstructions(rover,instructions)).toBe("Empty instructions");});
  it("should return string of rover position with different orientation", () => {
    const instructions : string = "L";
    const rover : Rover = {x:1, y:2, orientation:"E"};
    expect(inputInstructions(rover,instructions)).toBe("1 2 S");
  }); it("should return string of rover position with different orientation", () => {
    const instructions : string = "R";
    const rover : Rover = {x:5, y:5, orientation:"E"};
    expect(inputInstructions(rover, instructions)).toBe("5 5 N");
  });it("should string of rover position moved to the right", () => {
    const instructions : string = "M";
    const rover : Rover = {x:2, y:2, orientation:"E"};
    expect(inputInstructions(rover, instructions)).toBe("3 2 E");
  }); it("should return incorrect instructions found", () => {
    const instructions : string = "W";
    const rover : Rover = {x:2, y:2, orientation:"E"};
    expect(inputInstructions(rover, instructions)).toBe("Incorrect instruction found");
  });

});