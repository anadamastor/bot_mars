import { TRANSITION_SECONDS } from "../constants/constants";
import type { Robot } from "../types/types";

export const getRobotRotationStyle = (robot: Robot) => {
  return {
    transform: `rotate(${robot.robotAngle}deg)`,
    transition: `${TRANSITION_SECONDS}s`,
  };
};
