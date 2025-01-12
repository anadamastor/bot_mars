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
        "min-w-96 px-3 border border-slate-800 border-opacity-80 font-thin"
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
