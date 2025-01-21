import { createContext, useContext, useState } from "react";
import { Robot } from "../types/types";
import {
  INITIAL_POSITION,
  INITIAL_POSITION_2,
  INITIAL_POSITION_3,
} from "../constants/constants";

type RobotsContext = {
  robots: Robot[];
  setRobots: React.Dispatch<React.SetStateAction<Robot[]>>;
};

export const RobotsContext = createContext<RobotsContext | undefined>(
  undefined
);

export const RobotsProvider = ({ children }: { children: React.ReactNode }) => {
  const [robots, setRobots] = useState<Robot[]>([
    INITIAL_POSITION,
    INITIAL_POSITION_2,
    INITIAL_POSITION_3,
  ]);
  return (
    <RobotsContext.Provider value={{ robots, setRobots }}>
      {children}
    </RobotsContext.Provider>
  );
};

export const useRobots = () => {
  const context = useContext(RobotsContext);
  if (!context) {
    throw new Error("use robots needs a RobotsProvider");
  }
  return context;
};
