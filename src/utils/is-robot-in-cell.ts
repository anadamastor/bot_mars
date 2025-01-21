import type { CellCoordinates, Robot } from "../types/types";

export const isRobotInCell = ({
  robot,
  cellCoordinates,
}: {
  robot: Robot;
  cellCoordinates: CellCoordinates;
}): boolean => {
  const { robotX, robotY } = robot;
  const { cellX, cellY } = cellCoordinates;
  return robotX === cellX && robotY === cellY;
};
