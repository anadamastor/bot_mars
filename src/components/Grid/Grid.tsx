import { NUMBER_OF_ROWS } from "../../constants";
import { GridProps } from "../../types";
import { createArray } from "../../utils/create-array";
import Cell from "../Cell/Cell";

const Grid = ({ numberOfRows, numberOfColumns, robotPosition }: GridProps) => {
  const rowsArray = createArray(numberOfRows);
  const columnsArray = createArray(numberOfColumns);

  return (
    <div
      className={`grid grid-cols-[repeat(5,minmax(1rem,20%))] grid-rows-[repeat(5,minmax(50px,auto))] gap-2 mx-0 my-9`}
    >
      {rowsArray.map((rowIndex) => {
        return columnsArray.map((columnIndex) => {
          const cellY = NUMBER_OF_ROWS - 1 - rowIndex;
          const cellX = columnIndex;
          return (
            <Cell
              key={`${cellX}-${cellY}`}
              robotPosition={robotPosition}
              cellCoordinates={{
                cellX,
                cellY,
              }}
            />
          );
        });
      })}
    </div>
  );
};

export default Grid;
