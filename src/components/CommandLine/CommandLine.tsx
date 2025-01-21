import { useState } from "react";
import {
  INITIAL_POSITION,
  INITIAL_POSITION_2,
  INITIAL_POSITION_3,
  TRANSITION_SECONDS,
} from "../../constants/constants";
import { Button } from "./Button";
import { InstructionsInput } from "./InstructionsInput";
import {
  isMoveForwardInstruction,
  isRotateInstruction,
} from "../../types/type-guards";
import { animationDuration } from "../../utils/animation-duration";
import { moveForward } from "../../utils/move-forward";
import { rotate } from "../../utils/rotate";
import { useRobots } from "../../context/RobotsContext";

export const CommandLine = () => {
  const [instructions, setInstructions] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const context = useRobots();
  const { setRobots } = context;

  const executeInstructions = async (instructions: string) => {
    setIsAnimating(true);
    for (const instruction of instructions) {
      await animationDuration(TRANSITION_SECONDS).then(() => {
        if (isMoveForwardInstruction(instruction)) {
          setRobots((prevPosition) => {
            const newPositions = prevPosition.map((pos) => moveForward(pos));

            return newPositions;
          });
        }

        if (isRotateInstruction(instruction)) {
          setRobots((prevPosition) => {
            const newPositions = prevPosition.map((pos) => {
              return {
                ...pos,
                robotAngle: rotate({
                  initialAngle: pos.robotAngle,
                  directionOfRotation: instruction,
                }),
              };
            });
            return newPositions;
          });
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
        onClick={() =>
          setRobots([INITIAL_POSITION, INITIAL_POSITION_2, INITIAL_POSITION_3])
        }
        disabled={isAnimating}
      >
        Reset
      </Button>
    </div>
  );
};
