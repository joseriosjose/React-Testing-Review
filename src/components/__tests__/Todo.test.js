import { render, screen, cleanup } from "@testing-library/react";
import Todo from "../Todo";

afterEach(() => {
  cleanup();
});

test("should render non-completed Todo", () => {
  render(<Todo id={1} title={"Jugar Warzone"} completed={false} />);
  const todoElement = screen.getByTestId("todo-1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("Jugar Warzone");
  expect(todoElement).not.toContainHTML("strike");
});

test("should render completed Todo", () => {
  render(<Todo id={2} title={"Hacer mi tarea"} completed={true} />);
  const todoElement = screen.getByTestId("todo-2");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("Hacer mi tarea");
  expect(todoElement).toContainHTML("strike");
});
