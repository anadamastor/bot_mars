import { AvailableInstructions } from "../constants/constants";

export const isRotateInstruction = (
  instruction: string
): instruction is
  | AvailableInstructions["rotateLeft"]
  | AvailableInstructions["rotateRight"] => {
  return instruction === "L" || instruction === "R";
};

export const isMoveForwardInstruction = (
  instruction: string
): instruction is AvailableInstructions["moveForward"] => {
  return instruction === "F";
};
