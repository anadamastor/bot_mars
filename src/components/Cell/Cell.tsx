import { useRobot } from "../../hooks/useRobot";
import { CellProps } from "../../types/types";
import { getCoordinates } from "../../utils/get-coordinates";

export const Cell = ({ robotPosition, cellCoordinates }: CellProps) => {
  const { isInCell, robotRotation, robotIcon } = useRobot({
    robotPosition,
    cellCoordinates,
  });
  const cellCoordinatesText = getCoordinates(cellCoordinates);

  return (
    <div className="border border-stone-800 flex justify-center items-center text-4xl">
      {isInCell ? (
        <span style={robotRotation}>{robotIcon}</span>
      ) : (
        <p className="text-gray-300 text-3xl font-thin">
          {cellCoordinatesText}
        </p>
      )}
    </div>
  );
};
