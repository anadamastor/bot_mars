type GetCoordinatesProps = {
  numberOfRows: number;
  rowIndex: number;
  columnIndex: number;
};

type GetCoordinates = {
  cellY: number;
  cellX: number;
};

export const getCoordinates = ({
  numberOfRows,
  rowIndex,
  columnIndex,
}: GetCoordinatesProps): GetCoordinates => {
  return { cellY: numberOfRows - 1 - rowIndex, cellX: columnIndex };
};
