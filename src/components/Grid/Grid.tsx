import { NUMBER_OF_COLUMNS, NUMBER_OF_ROWS } from "../../constants/constants";
import { GridProps } from "../../types/types";
import { createArray } from "../../utils/create-array";
import Cell from "../Cell/Cell";

const Grid = ({ robotPosition }: GridProps) => {
  const rowsArray = createArray(NUMBER_OF_ROWS);
  const columnsArray = createArray(NUMBER_OF_COLUMNS);

  return (
    <div
      className={`grid mx-auto my-9 px-8 gap-2 grid-cols-[repeat(${NUMBER_OF_COLUMNS},minmax(1rem,20%))] grid-rows-[repeat(${NUMBER_OF_ROWS},minmax(50px,auto))]  `}
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
