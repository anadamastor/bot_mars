import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { InstructionsInput } from "../../../components/CommandLine/InstructionsInput";

describe("InstructionsInput", () => {
  const setInstructionsMock = vi.fn();
  const instructionsTextBox = () => screen.getByRole("textbox");

  beforeEach(() => {
    setInstructionsMock.mockClear();
  });

  it("should render correctly", () => {
    render(
      <InstructionsInput
        instructions={""}
        setInstructions={setInstructionsMock}
        isDisabled={false}
      />
    );
    expect(instructionsTextBox()).toBeVisible();
  });

  it("should allow permitted instructions - L, F, R", async () => {
    render(
      <InstructionsInput
        instructions={""}
        setInstructions={setInstructionsMock}
        isDisabled={false}
      />
    );
    await userEvent.type(instructionsTextBox(), "L");
    expect(setInstructionsMock).toHaveBeenCalledWith("L");

    await userEvent.type(instructionsTextBox(), "R");
    expect(setInstructionsMock).toHaveBeenCalledWith("R");

    await userEvent.type(instructionsTextBox(), "F");
    expect(setInstructionsMock).toHaveBeenCalledWith("F");
  });
  it("should not allow not permitted instructions", async () => {
    const consoleLogSpy = vi.spyOn(console, "log");

    render(
      <InstructionsInput
        instructions={""}
        setInstructions={setInstructionsMock}
        isDisabled={false}
      />
    );
    await userEvent.type(instructionsTextBox(), "T");
    expect(setInstructionsMock).not.toHaveBeenCalledOnce();
    expect(consoleLogSpy).toHaveBeenCalledWith("Character not allowed");

    await userEvent.type(instructionsTextBox(), "2");
    expect(setInstructionsMock).not.toHaveBeenCalledOnce();
    expect(consoleLogSpy).toHaveBeenCalledWith("Character not allowed");
  });
});
