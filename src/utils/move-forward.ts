import { gridBoundary } from "../constants/constants";
import { Position } from "../types/types";
import { normaliseAngle } from "./normalise-angle";

export const moveForward = (position: Position): Position => {
  const { robotX, robotY, robotAngle } = position;
  const normalisedRobotAngle = normaliseAngle(robotAngle);

  // MOVE UP
  if (normalisedRobotAngle === 0) {
    return { ...position, robotY: Math.min(robotY + 1, gridBoundary.y) };
  }

  //MOVE RIGHT
  if (normalisedRobotAngle === 90) {
    return {
      ...position,
      robotX: Math.min(robotX + 1, gridBoundary.x),
    };
  }

  // MOVE DOWN
  if (normalisedRobotAngle === 180) {
    return { ...position, robotY: Math.max(robotY - 1, 0) };
  }

  // MOVE LEFT
  if (normalisedRobotAngle === 270) {
    return {
      ...position,
      robotX: Math.max(robotX - 1, 0),
    };
  }

  return position;
};
