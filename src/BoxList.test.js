import { render, screen, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

describe("BoxList", () => {
  test("renders NewBoxForm and box components", () => {
    render(<BoxList />);
    expect(screen.getByText(/New Box/i)).toBeInTheDocument();
    expect(screen.queryAllByTestId("box")).toHaveLength(0);
  });

  test("adds new box when form is submitted", () => {
    render(<BoxList />);
    const widthInput = screen.getByLabelText(/width/i);
    fireEvent.change(widthInput, { target: { value: "50" } });
    fireEvent.click(screen.getByText(/add/i));
    expect(screen.queryAllByTestId("box")).toHaveLength(1);
  });

  test("removes box when remove button clicked", () => {
    render(<BoxList />);
    const boxes = [
      { id: 1, width: 50, backgroundColor: "red" },
      { id: 2, width: 100, backgroundColor: "blue" },
    ];
    boxes.forEach((box) => {
      const widthInput = screen.getByLabelText(/width/i);
      fireEvent.change(widthInput, { target: { value: box.width } });
      fireEvent.click(screen.getByText(/add/i));
    });
    expect(screen.queryAllByTestId("box")).toHaveLength(2);

    const removeButtons = screen.getAllByText(/x/i);
    fireEvent.click(removeButtons[0]);
    expect(screen.queryAllByTestId("box")).toHaveLength(1);
  });
});
