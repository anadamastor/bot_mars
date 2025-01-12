import { AvailableInstructions, Instructions } from "../constants/constants";

export const isRotateInstruction = (
  instruction: string
): instruction is
  | AvailableInstructions["rotateLeft"]
  | AvailableInstructions["rotateRight"] => {
  return (
    instruction === Instructions.RotateLeft ||
    instruction === Instructions.RotateRight
  );
};

export const isMoveForwardInstruction = (
  instruction: string
): instruction is AvailableInstructions["moveForward"] => {
  return instruction === Instructions.MoveForward;
};
