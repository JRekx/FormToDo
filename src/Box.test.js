import React from "react";
import { render, screen } from "@testing-library/react";
import Box from "./Box";

describe("Box", () => {
  test("renders box with default props", () => {
    render(<Box />);
    const box = screen.getByRole("box");
    expect(box).toHaveStyle({
      width: "5em",
      height: "5em",
      backgroundColor: "teal",
    });
  });

  test("renders box with custom props", () => {
    render(<Box width={100} height={200} backgroundColor="red" />);
    const box = screen.getByRole("box");
    expect(box).toHaveStyle({
      width: "100em",
      height: "200em",
      backgroundColor: "red",
    });
  });

  test("calls handleRemove when remove button clicked", () => {
    const handleRemove = jest.fn();
    render(<Box id="1" handleRemove={handleRemove} />);
    const button = screen.getByRole("button");
    button.click();
    expect(handleRemove).toHaveBeenCalledWith("1");
  });
});
