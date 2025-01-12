import { INITIAL_POSITION } from "../../constants/constants";
import type { Position } from "../../types/types";
import { Button } from "./Button";
import { InstructionsInput } from "./Input";

export type CommandLineProps = {
  instructions: string;
  setInstructions: (instructions: string) => void;
  executeInstructions: (instructions: string) => void;
  setRobotPosition: (position: Position) => void;
  isAnimating: boolean;
};

export const CommandLine = ({
  instructions,
  setInstructions,
  executeInstructions,
  setRobotPosition,
  isAnimating,
}: CommandLineProps) => {
  return (
    <div className={"flex flex-nowrap justify-center"}>
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
