import { gridBoundary } from "../constants/constants";
import { Robot } from "../types/types";
import { normaliseAngle } from "./normalise-angle";

export const moveForward = (robot: Robot): Robot => {
  const { robotX, robotY, robotAngle } = robot;
  const normalisedRobotAngle = normaliseAngle(robotAngle);

  // MOVE UP
  if (normalisedRobotAngle === 0) {
    return { ...robot, robotY: Math.min(robotY + 1, gridBoundary.y) };
  }

  //MOVE RIGHT
  if (normalisedRobotAngle === 90) {
    return {
      ...robot,
      robotX: Math.min(robotX + 1, gridBoundary.x),
    };
  }

  // MOVE DOWN
  if (normalisedRobotAngle === 180) {
    return { ...robot, robotY: Math.max(robotY - 1, 0) };
  }

  // MOVE LEFT
  if (normalisedRobotAngle === 270) {
    return {
      ...robot,
      robotX: Math.max(robotX - 1, 0),
    };
  }

  return robot;
};
