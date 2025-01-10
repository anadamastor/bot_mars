import { CellCoordinates } from "../types/types";

export const getCoordinates = (cellCoordinates: CellCoordinates): string =>
  `${cellCoordinates.cellX}-${cellCoordinates.cellY}`;
