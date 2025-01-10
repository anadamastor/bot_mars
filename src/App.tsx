import { useState } from "react";
import { CommandLine } from "./components/CommandLine/CommandLine";
import { INITIAL_POSITION, TRANSITION_SECONDS } from "./constants/constants";
import { Position } from "./types/types";
import { animationDuration } from "./utils/animation-duration";
import { moveForward } from "./utils/move-forward";
import { rotateRobot } from "./utils/rotate";
import Grid from "./components/Grid/Grid";
import {
  isMoveForwardInstruction,
  isRotateInstruction,
} from "./types/type-guards";

function App() {
  const [robotPosition, setRobotPosition] =
    useState<Position>(INITIAL_POSITION);

  const [instructions, setInstructions] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const executeInstructions = async (instructions: string) => {
    setIsAnimating(true);
    for (const instruction of instructions) {
      await animationDuration(TRANSITION_SECONDS).then(() => {
        if (isMoveForwardInstruction(instruction)) {
          setRobotPosition((prevPosition) => moveForward(prevPosition));
        }

        if (isRotateInstruction(instruction)) {
          setRobotPosition((prevPosition) => ({
            ...prevPosition,
            robotAngle: rotateRobot({
              angle: prevPosition.robotAngle,
              directionOfRotation: instruction,
            }),
          }));
        }
      });
    }
    setIsAnimating(false);
  };

  return (
    <div className={"max-w-xl mx-auto font-roboto px-8"}>
      <h1 className="text-center mt-9 text-4xl font-bold ">
        A little stroll on Mars
      </h1>
      <Grid robotPosition={robotPosition} />
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
