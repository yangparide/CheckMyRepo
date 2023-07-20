import { ReactNode, MouseEventHandler } from "react";

interface DefaultButton {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ ...props }: DefaultButton) {
  const { children, onClick } = props;

  return <button onClick={onClick}>{children}</button>;
}
