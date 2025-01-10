import { CellProps } from "../types/types";

export const isRobotInCell = ({
  robotPosition,
  cellCoordinates,
}: CellProps): boolean => {
  const { robotX, robotY } = robotPosition;
  const { cellX, cellY } = cellCoordinates;
  return robotX === cellX && robotY === cellY;
};
