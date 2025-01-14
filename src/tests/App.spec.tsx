import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import userEvent from "@testing-library/user-event";

type RobotSelectorProps = {
  cellX: number;
  cellY: number;
  angle: number;
};
const robotSelector = ({ cellX, cellY, angle }: RobotSelectorProps) =>
  screen.getByLabelText(
    `Robot is here! Cell: ${cellX}-${cellY} with ${angle} deg rotation`
  );

const getTimeout = (instructions: string) => 2000 * instructions.length;

describe("App", async () => {
  afterEach(() => {
    cleanup();
  });

  const instructionsTextBox = () => screen.getByRole("textbox");
  const moveButton = () => screen.getByRole("button", { name: "Move" });

  it("should load correctly", () => {
    render(<App />);
    expect(screen.getByText(/A little stroll on Mars/i)).toBeVisible();
    expect(moveButton()).toBeVisible();
  });

  it("should ignore not permitted instructions", async () => {
    render(<App />);
    const permittedInstructions = "FFRF";
    await userEvent.type(instructionsTextBox(), `${permittedInstructions}JSWQ`);
    expect(instructionsTextBox()).toHaveValue(permittedInstructions);
  });

  it("should show Robot in its initial position", () => {
    render(<App />);
    expect(robotSelector({ cellX: 0, cellY: 0, angle: 0 })).toBeVisible();
  });

  it("should move Robot by two cells on top", async () => {
    render(<App />);
    const instructions = "FF";
    await userEvent.type(instructionsTextBox(), instructions);
    await userEvent.click(moveButton());
    await waitFor(
      () => {
        expect(robotSelector({ cellX: 0, cellY: 2, angle: 0 })).toBeVisible();
      },
      { timeout: getTimeout(instructions) }
    );
  });

  it("should rotate Robot to the right", async () => {
    render(<App />);
    const instructions = "R";
    await userEvent.type(instructionsTextBox(), instructions);
    await userEvent.click(moveButton());
    await waitFor(
      () => {
        expect(robotSelector({ cellX: 0, cellY: 0, angle: 90 })).toBeVisible();
      },
      { timeout: getTimeout(instructions) }
    );
  });
  it("should rotate Robot to the left", async () => {
    render(<App />);
    const instructions = "L";
    await userEvent.type(instructionsTextBox(), instructions);
    await userEvent.click(moveButton());
    await waitFor(
      () => {
        expect(robotSelector({ cellX: 0, cellY: 0, angle: -90 })).toBeVisible();
      },
      { timeout: getTimeout(instructions) }
    );
  });
  it("should keep the Robot within the top boundary of the grid", async () => {
    render(<App />);
    const instructions = "FFFFFF";
    await userEvent.type(instructionsTextBox(), instructions);
    await userEvent.click(moveButton());
    await waitFor(
      () => {
        expect(robotSelector({ cellX: 0, cellY: 4, angle: 0 })).toBeVisible();
      },
      { timeout: getTimeout(instructions) }
    );
  });
  it("should keep the Robot within the left boundary of the grid", async () => {
    render(<App />);
    const instructions = "LFFFFF";
    await userEvent.type(instructionsTextBox(), instructions);
    await userEvent.click(moveButton());
    await waitFor(
      () => {
        expect(robotSelector({ cellX: 0, cellY: 0, angle: -90 })).toBeVisible();
      },
      { timeout: getTimeout(instructions) }
    );
  });
  it("should keep the Robot within the bottom boundary of the grid", async () => {
    render(<App />);
    const instructions = "RRFFF";
    await userEvent.type(instructionsTextBox(), instructions);
    await userEvent.click(moveButton());
    await waitFor(
      () => {
        expect(robotSelector({ cellX: 0, cellY: 0, angle: 180 })).toBeVisible();
      },
      { timeout: getTimeout(instructions) }
    );
  });

  it("should keep the Robot within the right boundary of the grid", async () => {
    render(<App />);
    const instructions = "RFFFFF";
    await userEvent.type(instructionsTextBox(), instructions);
    await userEvent.click(moveButton());
    await waitFor(
      () => {
        expect(robotSelector({ cellX: 4, cellY: 0, angle: 90 })).toBeVisible();
      },
      { timeout: getTimeout(instructions) }
    );
  }, 10000);

  it("should move the Robot to the right location after 15 negative rotations", async () => {
    render(<App />);
    const instructions = "FRFFLLLLLLLLLLLLLLLLF";
    await userEvent.type(instructionsTextBox(), instructions);
    await userEvent.click(moveButton());
    await waitFor(
      () => {
        expect(
          robotSelector({ cellX: 3, cellY: 1, angle: -1350 })
        ).toBeVisible();
      },
      { timeout: getTimeout(instructions) }
    );
  }, 10000);
  it("should move the Robot to the right location after 15 positive rotations", async () => {
    render(<App />);
    const instructions = "FRFFLRRRRRRRRRRRRRRRF";
    await userEvent.type(instructionsTextBox(), instructions);
    await userEvent.click(moveButton());
    await waitFor(
      () => {
        expect(
          robotSelector({ cellX: 1, cellY: 1, angle: 1350 })
        ).toBeVisible();
      },
      { timeout: getTimeout(instructions) }
    );
  }, 10000);
});
