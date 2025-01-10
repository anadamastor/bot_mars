import { NUMBER_OF_COLUMNS, NUMBER_OF_ROWS } from "../constants";
import { Position } from "../types";

export const moveForward = (position: Position): Position => {
  const { robotX, robotY, robotAngle } = position;

  const normalisedRobotAngle = (robotAngle + 360) % 360;
  // MOVE UP
  if (normalisedRobotAngle === 0) {
    if (robotY + 1 === NUMBER_OF_ROWS - 1) {
      console.log("JUST HIT TOP BORDER");
    }
    return { ...position, robotY: Math.min(robotY + 1, NUMBER_OF_ROWS - 1) };
  }
  //MOVE RIGHT
  if (normalisedRobotAngle === 90) {
    return {
      ...position,
      robotX: Math.min(robotX + 1, NUMBER_OF_COLUMNS - 1),
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
