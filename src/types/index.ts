export type GridProps = {
  numberOfRows: number;
  numberOfColumns: number;
  robotPosition: Position;
};

export type Position = {
  robotX: number;
  robotY: number;
  robotAngle: number;
};

export type CellProps = {
  robotPosition: Position;
  cellCoordinates: CellCoordinates;
};

export type CellCoordinates = {
  cellX: number;
  cellY: number;
};

export type CommandLineProps = {
  instructions: string;
  setInstructions: (instructions: string) => void;
  executeInstructions: (instructions: string) => void;
  setRobotPosition: (position: Position) => void;
  isAnimating: boolean;
};
