import { useRobot } from "../../hooks/useRobot";
import type { CellProps } from "../../types/types";
import { formatCoordinates } from "../../utils/format-coordinates.ts";

export const Cell = ({ robotPosition, cellCoordinates }: CellProps) => {
  const { isInCell, robotRotation, robotIcon } = useRobot({
    robotPosition,
    cellCoordinates,
  });
  const cellCoordinatesText = formatCoordinates(cellCoordinates);
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
