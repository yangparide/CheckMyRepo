import { ReactNode, MouseEventHandler } from "react";
import "./Button.scss";
interface DefaultButton {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  bgColor?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({ ...props }: DefaultButton) {
  const { children, onClick, bgColor, type } = props;

  return (
    <button
      type={type ? type : "button"}
      onClick={onClick}
      className={`custom-button bg-${bgColor ? bgColor : "blue"}`}
    >
      {children}
    </button>
  );
}
