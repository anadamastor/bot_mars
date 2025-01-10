import { Position } from "../types";

export const INITIAL_POSITION: Position = {
  robotX: 0,
  robotY: 0,
  robotAngle: 0,
};

export const NUMBER_OF_ROWS = 5;
export const NUMBER_OF_COLUMNS = 5;
export const TRANSITION_SECONDS = 0.2;

export const POSSIBLE_INSTRUCTIONS = {
  moveForwardInstruction: "F",
  rotateLeftInstruction: "L",
  rotateRightInstruction: "R",
};
