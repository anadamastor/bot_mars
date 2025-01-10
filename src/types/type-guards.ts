import { PossibleInstructions } from "../constants/constants";

export const isRotateInstruction = (
  instruction: string
): instruction is PossibleInstructions["rotateInstruction"] => {
  return instruction === "R" || instruction === "L";
};

export const isMoveForwardInstruction = (
  instruction: string
): instruction is PossibleInstructions["moveForwardInstruction"] => {
  return instruction === "F";
};
