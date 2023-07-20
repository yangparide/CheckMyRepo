import { MouseEventHandler } from "react";

interface DefaultArrowElement {
  direction: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

export default function ArrowElement({ ...props }: DefaultArrowElement) {
  const { direction, onClick } = props;
  return <div onClick={onClick}>{direction === "left" ? "←" : "→"}</div>;
}
