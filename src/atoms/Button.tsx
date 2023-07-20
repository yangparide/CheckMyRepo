import { ReactNode, MouseEventHandler } from "react";
import "./Button.css";
interface DefaultButton {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  bgColor?: string;
}

export default function Button({ ...props }: DefaultButton) {
  const { children, onClick, bgColor } = props;

  return (
    <button
      onClick={onClick}
      className={`custom-button bg-${bgColor ? bgColor : "blue"}`}
    >
      {children}
    </button>
  );
}
