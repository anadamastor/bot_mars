import { PossibleInstructions } from "../constants/constants";

type RotateProps = {
  angle: number;
  directionOfRotation: PossibleInstructions["rotateInstruction"];
};

export const rotateRobot = ({
  angle,
  directionOfRotation,
}: RotateProps): number => {
  if (directionOfRotation === "L") {
    return angle - 90;
  }
  if (directionOfRotation === "R") {
    return angle + 90;
  }
  return angle;
};
