import { INITIAL_POSITION } from "../../constants/constants";
import { CommandLineProps } from "../../types/types";
import { Button } from "./Button";
import { InstructionsInput } from "./Input";

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
        disabled={isAnimating}
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
