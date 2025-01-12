import { Position } from "../types/types";

export const INITIAL_POSITION: Position = {
  robotX: 0,
  robotY: 0,
  robotAngle: 0,
};

export const NUMBER_OF_ROWS = 5;
export const NUMBER_OF_COLUMNS = 5;
export const TRANSITION_SECONDS = 0.2;
export const ROBOT_ICON = "🤖";

export enum Instruction {
  MoveForward = "F",
  RotateLeft = "L",
  RotateRight = "R",
}

export type AvailableInstructions = {
  moveForward: Instruction.MoveForward;
  rotateLeft: Instruction.RotateLeft;
  rotateRight: Instruction.RotateRight;
};

export const AVAILABLE_INSTRUCTION: AvailableInstructions = {
  moveForward: Instruction.MoveForward,
  rotateLeft: Instruction.RotateLeft,
  rotateRight: Instruction.RotateRight,
};
