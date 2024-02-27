import React from "react";
import { render } from "@testing-library/react";
import App from "./App1";

describe("Index", () => {
  test("renders App component", () => {
    render(<App />);
  });

  test("calls reportWebVitals", () => {
    const reportWebVitals = jest.fn();
    require("./reportWebVitals")(reportWebVitals);
    expect(reportWebVitals).toHaveBeenCalled();
  });
});
