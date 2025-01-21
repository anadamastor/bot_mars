import { NUMBER_OF_COLUMNS, NUMBER_OF_ROWS } from "../../constants/constants";
import type { Position } from "../../types/types";
import { createArray } from "../../utils/create-array";
import { getCoordinates } from "../../utils/get-coordinates";
import { Cell } from "../Cell/Cell";

export type GridProps = {
  robotPosition: Position[];
};

const Grid = ({ robotPosition }: GridProps) => {
  const rowIndices = createArray(NUMBER_OF_ROWS);
  const columnIndices = createArray(NUMBER_OF_COLUMNS);

  return (
    <div
      className={`grid justify-center my-9 gap-2`}
      style={{
        gridTemplateColumns: `repeat(${NUMBER_OF_COLUMNS}, min(5rem)`,
        gridTemplateRows: `repeat(${NUMBER_OF_ROWS}, min(5rem)`,
      }}
    >
      {rowIndices.map((rowIndex) => {
        return columnIndices.map((columnIndex) => {
          const cellCoordinates = getCoordinates({
            numberOfRows: NUMBER_OF_ROWS,
            rowIndex,
            columnIndex,
          });

          return robotPosition.map((robotPosition) => {
            return (
              <Cell
                key={`${cellCoordinates.cellX}-${cellCoordinates.cellY}`}
                robotPosition={robotPosition}
                cellCoordinates={cellCoordinates}
              />
            );
          });
        });
      })}
    </div>
  );
};

export default Grid;
