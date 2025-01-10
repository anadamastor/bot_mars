import { INITIAL_POSITION } from "../../constants";
import { CommandLineProps } from "../../types";

const CommandLine = ({
  instructions,
  setInstructions,
  executeInstructions,
  setRobotPosition,
  isAnimating,
}: CommandLineProps) => {
  return (
    <div className={"flex justify-between"}>
      <input
        type="area"
        className={"pl-3 w-3/5 border border-slate-800 border-opacity-70 "}
        value={instructions}
        onChange={(e) => {
          setInstructions(e.target.value);
          console.log(instructions);
        }}
        placeholder="Instructions (R-L-F only)"
      />
      <button
        className={
          "px-10 bg-slate-400 text-white cursor-pointer py-4 hover:bg-slate-500 active:bg-slate-600 disabled:bg-slate-200"
        }
        onClick={() => executeInstructions(instructions)}
        disabled={isAnimating}
      >
        MOVE
      </button>
      <button
        className={
          "px-10 bg-slate-400 text-white cursor-pointer py-4 hover:bg-slate-500  active:bg-slate-600  disabled:bg-slate-200"
        }
        onClick={() => setRobotPosition(INITIAL_POSITION)}
        disabled={isAnimating}
      >
        RESET
      </button>
    </div>
  );
};

export default CommandLine;
