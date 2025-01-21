import { CommandLine } from "./components/CommandLine/CommandLine";
import Grid from "./components/Grid/Grid";
import { RobotsProvider } from "./context/RobotsContext";

function App() {
  return (
    <RobotsProvider>
      <div
        className={
          "font-roboto px-8  flex flex-col justify-center items-center mt-20"
        }
      >
        <h1 className="text-center text-4xl font-bold">
          A little stroll on Mars
        </h1>
        <Grid />
        <CommandLine />
      </div>
    </RobotsProvider>
  );
}

export default App;
