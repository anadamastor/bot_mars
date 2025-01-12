import {
  isMoveForwardInstruction,
  isRotateInstruction,
} from "../types/type-guards";

export const isValidInstructions = (instructions: string): boolean =>
  instructions
    .split("")
    .every(
      (instruction) =>
        isRotateInstruction(instruction) ||
        isMoveForwardInstruction(instruction)
    );
