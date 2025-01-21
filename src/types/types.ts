export type Robot = {
  robotX: number;
  robotY: number;
  robotAngle: number;
};

export type CellCoordinates = {
  cellX: number;
  cellY: number;
};

export type CellProps = {
  robot: Robot | undefined;
  cellCoordinates: CellCoordinates;
};
