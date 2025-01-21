import { useState } from "react";
import { CommandLine } from "./components/CommandLine/CommandLine";
import Grid from "./components/Grid/Grid";
import {
  INITIAL_POSITION,
  INITIAL_POSITION_2,
  INITIAL_POSITION_3,
} from "./constants/constants";
import type { Robot } from "./types/types";

function App() {
  const [robots, setRobots] = useState<Robot[]>([
    INITIAL_POSITION,
    INITIAL_POSITION_2,
    INITIAL_POSITION_3,
  ]);

  return (
    <div
      className={
        "font-roboto px-8  flex flex-col justify-center items-center mt-20"
      }
    >
      <h1 className="text-center text-4xl font-bold">
        A little stroll on Mars
      </h1>
      <Grid robots={robots} />
      <CommandLine setRobotPosition={setRobots} robotPosition={robots} />
    </div>
  );
}

export default App;
