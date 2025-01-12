import { Position } from "../types/types";

export const NUMBER_OF_ROWS = 5;
export const NUMBER_OF_COLUMNS = 5;
export const TRANSITION_SECONDS = 0.5;
export const ROBOT_ICON = "🤖";
export const INITIAL_POSITION: Position = {
  robotX: 0,
  robotY: 0,
  robotAngle: 0,
};

export const gridBoundary = {
  x: NUMBER_OF_ROWS - 1,
  y: NUMBER_OF_COLUMNS - 1,
};

export enum Instructions {
  MoveForward = "F",
  RotateLeft = "L",
  RotateRight = "R",
}

export type AvailableInstructions = {
  moveForward: Instructions.MoveForward;
  rotateLeft: Instructions.RotateLeft;
  rotateRight: Instructions.RotateRight;
};

export const AVAILABLE_INSTRUCTIONS: AvailableInstructions = {
  moveForward: Instructions.MoveForward,
  rotateLeft: Instructions.RotateLeft,
  rotateRight: Instructions.RotateRight,
};
