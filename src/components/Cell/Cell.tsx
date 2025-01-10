import { TRANSITION_SECONDS } from "../../constants";
import { CellProps } from "../../types";
import { getCoordinates } from "../../utils/get-coordinates";
import { isRobotInCell } from "../../utils/is-robot-in-cell";

const Cell = ({ robotPosition, cellCoordinates }: CellProps) => {
  const cellCoordinatesText = getCoordinates(cellCoordinates);

  return (
    <div className={"border-2 h-24 flex justify-center items-center text-4xl"}>
      {isRobotInCell({ robotPosition, cellCoordinates }) ? (
        <span
          style={{
            transform: `rotate(${robotPosition.robotAngle}deg)`,
            transition: `${TRANSITION_SECONDS}s`,
          }}
        >
          🤖
        </span>
      ) : (
        <p className="text-gray-200 text-xl">{cellCoordinatesText}</p>
      )}
    </div>
  );
};

export default Cell;
