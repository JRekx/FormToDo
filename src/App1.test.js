import { render, screen } from '@testing-library/react';
import App from './App1';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
import { render, screen } from "@testing-library/react";
import BoxList from "./Box_List";

describe("BoxList", () => {
  test("renders NewBoxForm and box components", () => {
    render(<BoxList />);
    expect(screen.getByText(/New Box/i)).toBeInTheDocument();
    expect(screen.getAllByTestId("box")).toHaveLength(0);
  });

  test("adds new box when form is submitted", () => {
    render(<BoxList />);
    const input = screen.getByLabelText(/Width/i);
    const button = screen.getByText(/Add/i);
    fireEvent.change(input, { target: { value: "50" } });
    fireEvent.click(button);
    expect(screen.getAllByTestId("box")).toHaveLength(1);
  });

  test("removes box when remove button clicked", () => {
    render(<BoxList />);
    const boxes = [
      { id: 1, width: 50, backgroundColor: "red" },
      { id: 2, width: 100, backgroundColor: "blue" },
    ];
    boxes.forEach((box) => {
      const input = screen.getByLabelText(/Width/i);
      fireEvent.change(input, { target: { value: box.width } });
      fireEvent.click(screen.getByText(/Add/i));
    });
    expect(screen.getAllByTestId("box")).toHaveLength(2);

    const removeButtons = screen.getAllByText(/x/i);
    fireEvent.click(removeButtons[0]);
    expect(screen.getAllByTestId("box")).toHaveLength(1);
  });
});
