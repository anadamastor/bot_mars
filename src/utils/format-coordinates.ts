import { CellCoordinates } from "../types/types";

export const formatCoordinates = (cellCoordinates: CellCoordinates): string =>
  `${cellCoordinates.cellX}-${cellCoordinates.cellY}`;
