import { isValidInstructions } from "../../utils/is-valid-instructiions";

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
    if (isValidInstructions(allInstructions)) {
      setInstructions(allInstructions);
    } else {
      console.log("Character not allowed");
    }
  };

  return (
    <input
      type="text"
      className={
        "px-3 border border-slate-800 border-opacity-80 font-thin w-56 text-sm"
      }
      value={instructions}
      onChange={(e) => handleInputChange(e)}
      placeholder="Instructions (only R, L, or F allowed)"
      disabled={isDisabled}
    />
  );
};
