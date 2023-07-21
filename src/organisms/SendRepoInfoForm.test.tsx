import { render, screen } from "@testing-library/react";
import SendRepoInfoForm from "./SendRepoInfoForm";

test("render SendRepoInfoForm start button", () => {
  render(<SendRepoInfoForm />);
  const startButton = screen.getByText(/Procediamo/i);
  expect(startButton).toBeInTheDocument();
});
