import {
  AVAILABLE_INSTRUCTION,
  type AvailableInstructions,
} from "../constants/constants";

type RotateRobotProps = {
  angle: number;
  directionOfRotation:
    | AvailableInstructions["rotateLeft"]
    | AvailableInstructions["rotateRight"];
};

export const rotateRobot = ({
  angle,
  directionOfRotation,
}: RotateRobotProps): number => {
  if (directionOfRotation === AVAILABLE_INSTRUCTION.rotateLeft) {
    return angle - 90;
  }
  if (directionOfRotation === AVAILABLE_INSTRUCTION.rotateRight) {
    return angle + 90;
  }
  return angle;
};
