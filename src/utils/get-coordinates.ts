import { CellCoordinates } from "../types";

export const getCoordinates = (cellCoordinates: CellCoordinates): string =>
  `${cellCoordinates.cellX}-${cellCoordinates.cellY}`;
