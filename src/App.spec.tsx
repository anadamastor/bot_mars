import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";

test("check apps is loading", () => {
  render(<App />);
  expect(screen.getByText(/hello/i)).toBeVisible;
});
