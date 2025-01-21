import React from "react";
import type { CellProps } from "../../types/types";
import { formatCoordinates } from "../../utils/format-coordinates.ts";
import { getRobotRotationStyle } from "../../utils/get-robot-rotation-style.tsx";
import { isRobotInCell } from "../../utils/is-robot-in-cell.ts";
import { ROBOT_ICON } from "../../constants/constants.ts";

export const Cell = React.memo(({ robot, cellCoordinates }: CellProps) => {
  const cellCoordinatesText = formatCoordinates(cellCoordinates);
  return (
    <div className="border border-stone-800 flex justify-center items-center text-4xl">
      {robot && isRobotInCell({ robot, cellCoordinates }) ? (
        <div
          style={getRobotRotationStyle(robot)}
          aria-label={`Robot is here! Cell: ${cellCoordinatesText} with ${robot.robotAngle} deg rotation`}
        >
          {ROBOT_ICON}
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
});
