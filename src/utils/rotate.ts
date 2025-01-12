import { Instructions } from "../constants/constants";

type RotateRobotProps = {
  initialAngle: number;
  directionOfRotation: Instructions.RotateLeft | Instructions.RotateRight;
};

export const rotate = ({
  initialAngle,
  directionOfRotation,
}: RotateRobotProps): number => {
  if (directionOfRotation === Instructions.RotateLeft) {
    return initialAngle - 90;
  }
  if (directionOfRotation === Instructions.RotateRight) {
    return initialAngle + 90;
  }
  return initialAngle;
};
