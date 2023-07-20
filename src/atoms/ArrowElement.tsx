import { MouseEventHandler } from "react";
import "./ArrowElement.scss";

interface DefaultArrowElement {
  direction: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

export default function ArrowElement({ ...props }: DefaultArrowElement) {
  const { direction, onClick } = props;
  return (
    <div className="arrow-container" onClick={onClick}>
      {direction === "left" ? "←" : "→"}
    </div>
  );
}
