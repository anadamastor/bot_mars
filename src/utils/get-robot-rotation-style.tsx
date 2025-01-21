import { TRANSITION_SECONDS } from "../constants/constants";
import type { Position } from "../types/types";

export const getRobotRotationStyle = (robot: Position) => {
  return {
    transform: `rotate(${robot.robotAngle}deg)`,
    transition: `${TRANSITION_SECONDS}s`,
  };
};
