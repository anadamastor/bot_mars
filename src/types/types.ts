export type Position = {
  robotX: number;
  robotY: number;
  robotAngle: number;
};

export type CellCoordinates = {
  cellX: number;
  cellY: number;
};

export type CellProps = {
  robotPosition: Position;
  cellCoordinates: CellCoordinates;
};
