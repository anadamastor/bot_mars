import { NUMBER_OF_COLUMNS, NUMBER_OF_ROWS } from "../../constants/constants";
import { GridProps } from "../../types/types";
import { createArray } from "../../utils/create-array";
import { Cell } from "../Cell/Cell";

const Grid = ({ robotPosition }: GridProps) => {
  const rowsArray = createArray(NUMBER_OF_ROWS);
  const columnsArray = createArray(NUMBER_OF_COLUMNS);

  return (
    <div
      className={`grid justify-center my-9 gap-2`}
      style={{
        gridTemplateColumns: `repeat(${NUMBER_OF_COLUMNS}, minmax(5rem,auto))`,
        gridTemplateRows: `repeat(${NUMBER_OF_ROWS}, minmax(5rem,auto)`,
      }}
    >
      {rowsArray.map((rowIndex) => {
        return columnsArray.map((columnIndex) => {
          // move this to a uilitiy
          const cellCoordinates = {
            cellY: NUMBER_OF_ROWS - 1 - rowIndex,
            cellX: columnIndex,
          };

          return (
            <Cell
              key={`${cellCoordinates.cellX}-${cellCoordinates.cellY}`}
              robotPosition={robotPosition}
              cellCoordinates={cellCoordinates}
            />
          );
        });
      })}
    </div>
  );
};

export default Grid;
