import { ROBOT_ICON, TRANSITION_SECONDS } from "../constants/constants";
import type { CellProps } from "../types/types";
import { isRobotInCell } from "../utils/is-robot-in-cell";

export const useRobot = ({ robotPosition, cellCoordinates }: CellProps) => {
  const isInCell = isRobotInCell({ robotPosition, cellCoordinates });
  const robotRotation = {
    transform: `rotate(${robotPosition.robotAngle}deg)`,
    transition: `${TRANSITION_SECONDS}s`,
  };

  return { isInCell, robotRotation, robotIcon: ROBOT_ICON };
};
