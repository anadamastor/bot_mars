import {
  isMoveForwardInstruction,
  isRotateInstruction,
} from "../../types/type-guards";

type InstructionsInputProps = {
  instructions: string;
  setInstructions: (instructions: string) => void;
  isDisabled: boolean;
};

export const InstructionsInput = ({
  instructions,
  setInstructions,
  isDisabled,
}: InstructionsInputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const allInstructions = e.currentTarget.value.toUpperCase();
    if (allInstructions === "") {
      setInstructions("");
      return;
    }

    const lastInstruction = allInstructions.slice(-1);
    if (
      isRotateInstruction(lastInstruction) ||
      isMoveForwardInstruction(lastInstruction)
    ) {
      setInstructions(allInstructions);
    } else {
      console.log("Character not allowed");
    }
  };

  return (
    <input
      type="text"
      className={
        "min-w-96 px-3 border border-slate-800 border-opacity-80 font-thin"
      }
      value={instructions}
      onChange={(e) => handleInputChange(e)}
      placeholder="Instructions (only R, L, or F allowed)"
      disabled={isDisabled}
    />
  );
};
