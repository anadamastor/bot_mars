import React from "react";
import { useRobot } from "../../hooks/useRobot";
import type { CellProps } from "../../types/types";
import { formatCoordinates } from "../../utils/format-coordinates.ts";

export const Cell = React.memo(
  ({ robotPosition, cellCoordinates }: CellProps) => {
    const { isInCell, robotRotationStyle, robotIcon } = useRobot({
      robotPosition,
      cellCoordinates,
    });
    const cellCoordinatesText = formatCoordinates(cellCoordinates);
    return (
      <div className="border border-stone-800 flex justify-center items-center text-4xl">
        {isInCell ? (
          <div
            style={robotRotationStyle}
            aria-label={`Robot is here! Cell: ${cellCoordinatesText} with ${robotPosition.robotAngle} deg rotation`}
          >
            {robotIcon}
          </div>
        ) : (
          <p
            aria-label={`No Robot at Cell: ${cellCoordinatesText}`}
            className="text-gray-300 text-3xl font-thin"
          >
            {cellCoordinatesText}
          </p>
        )}
      </div>
    );
  }
);
