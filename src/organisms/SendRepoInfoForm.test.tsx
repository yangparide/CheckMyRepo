import { render, screen } from "@testing-library/react";
import SendRepoInfoForm, { checkFormValueErrors } from "./SendRepoInfoForm";

test("render SendRepoInfoForm start button", () => {
  render(<SendRepoInfoForm />);
  const startButton = screen.getByText(/Procediamo/i);
  expect(startButton).toBeInTheDocument();
});

test("check if email value is not accepted", () => {
  expect(checkFormValueErrors("test@test.com")).not.toBe(false);
});
