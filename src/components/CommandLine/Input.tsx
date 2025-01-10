type InstructionsInputProps = {
  instructions: string;
  setInstructions: (instructions: string) => void;
  disabled: boolean;
};

export const InstructionsInput = ({
  instructions,
  setInstructions,
  disabled,
}: InstructionsInputProps) => {
  return (
    <input
      type="area"
      className={
        "px-3 w-3/5 border border-slate-800 border-opacity-70 font-thin"
      }
      value={instructions}
      onChange={(e) => {
        setInstructions(e.target.value);
      }}
      placeholder="Instructions (R-L-F only)"
      disabled={disabled}
    />
  );
};
