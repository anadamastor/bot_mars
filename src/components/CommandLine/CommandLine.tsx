import { useState } from "react";
import {
  INITIAL_POSITION,
  TRANSITION_SECONDS,
} from "../../constants/constants";
import type { Position } from "../../types/types";
import { Button } from "./Button";
import { InstructionsInput } from "./InstructionsInput";
import {
  isMoveForwardInstruction,
  isRotateInstruction,
} from "../../types/type-guards";
import { animationDuration } from "../../utils/animation-duration";
import { moveForward } from "../../utils/move-forward";
import { rotate } from "../../utils/rotate";

export type CommandLineProps = {
  setRobotPosition: React.Dispatch<React.SetStateAction<Position>>;
};

export const CommandLine = ({ setRobotPosition }: CommandLineProps) => {
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
            robotAngle: rotate({
              initialAngle: prevPosition.robotAngle,
              directionOfRotation: instruction,
            }),
          }));
        }
      });
    }
    setIsAnimating(false);
  };
  return (
    <div className={"flex"}>
      <InstructionsInput
        isDisabled={isAnimating}
        instructions={instructions}
        setInstructions={setInstructions}
      />
      <Button
        onClick={() => executeInstructions(instructions)}
        disabled={isAnimating}
      >
        Move
      </Button>
      <Button
        onClick={() => setRobotPosition(INITIAL_POSITION)}
        disabled={isAnimating}
      >
        Reset
      </Button>
    </div>
  );
};
