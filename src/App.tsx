import { useState } from "react";

import CommandLine from "./components/CommandLine/CommandLine";
import {
  INITIAL_POSITION,
  NUMBER_OF_COLUMNS,
  NUMBER_OF_ROWS,
  POSSIBLE_INSTRUCTIONS,
  TRANSITION_SECONDS,
} from "./constants";
import { Position } from "./types";
import { animationDuration } from "./utils/animation-duration";
import { moveForward } from "./utils/move-forward";
import { rotateRight, rotatetLeft } from "./utils/rotate";
import Grid from "./components/Grid/Grid";

const {
  moveForwardInstruction,
  rotateLeftInstruction,
  rotateRightInstruction,
} = POSSIBLE_INSTRUCTIONS;

function App() {
  const [robotPosition, setRobotPosition] =
    useState<Position>(INITIAL_POSITION);

  const [instructions, setInstructions] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const executeInstructions = async (instructions: string) => {
    setIsAnimating(true);
    for (const instruction of instructions) {
      await animationDuration(TRANSITION_SECONDS).then(() => {
        if (instruction === moveForwardInstruction) {
          setRobotPosition((prevPosition) => moveForward(prevPosition));
        }

        if (instruction === rotateLeftInstruction) {
          setRobotPosition((prevPosition) => ({
            ...prevPosition,
            robotAngle: rotatetLeft(prevPosition.robotAngle),
          }));
        }

        if (instruction === rotateRightInstruction) {
          setRobotPosition((prevPosition) => ({
            ...prevPosition,
            robotAngle: rotateRight(prevPosition.robotAngle),
          }));
        }
      });
    }
    setIsAnimating(false);
  };

  return (
    <div className={"max-w-3xl mx-auto"}>
      <h1 className="text-center my-9 ">A stroll on Mars</h1>
      <Grid
        numberOfRows={NUMBER_OF_ROWS}
        numberOfColumns={NUMBER_OF_COLUMNS}
        robotPosition={robotPosition}
      />
      <CommandLine
        instructions={instructions}
        setInstructions={setInstructions}
        executeInstructions={executeInstructions}
        setRobotPosition={setRobotPosition}
        isAnimating={isAnimating}
      />
    </div>
  );
}

export default App;
