import { ROBOT_ICON, TRANSITION_SECONDS } from "../../constants/constants";
import { CellProps } from "../../types/types";
import { getCoordinates } from "../../utils/get-coordinates";
import { isRobotInCell } from "../../utils/is-robot-in-cell";

const Cell = ({ robotPosition, cellCoordinates }: CellProps) => {
  const cellCoordinatesText = getCoordinates(cellCoordinates);

  return (
    <div
      className={
        "border border-stone-800 h-20 flex justify-center items-center text-4xl font-thin"
      }
    >
      {isRobotInCell({ robotPosition, cellCoordinates }) ? (
        <span
          style={{
            transform: `rotate(${robotPosition.robotAngle}deg)`,
            transition: `${TRANSITION_SECONDS}s`,
          }}
        >
          {ROBOT_ICON}
        </span>
      ) : (
        <p className="text-gray-300 text-2xl">{cellCoordinatesText}</p>
      )}
    </div>
  );
};

export default Cell;
