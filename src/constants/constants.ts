import { Position } from "../types/types";

export const INITIAL_POSITION: Position = {
  robotX: 0,
  robotY: 0,
  robotAngle: 0,
};

export const NUMBER_OF_ROWS = 4;
export const NUMBER_OF_COLUMNS = 5;
export const TRANSITION_SECONDS = 1;
export const ROBOT_ICON = "🤖";

export type PossibleInstructions = {
  moveForwardInstruction: "F";
  rotateInstruction: "L" | "R";
};
