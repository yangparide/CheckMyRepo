import { MouseEventHandler } from "react";
import ArrowElement from "../atoms/ArrowElement";
import "./LabelWithArrows.scss";
interface DefaultLabelWithArrows {
  goToPrevPage: MouseEventHandler;
  goToNextPage?: MouseEventHandler;
  label: string;
}

export default function LabelWithArrows({ ...props }: DefaultLabelWithArrows) {
  const { goToPrevPage, goToNextPage, label } = props;

  return (
    <div className={`label-with-arrows-container`}>
      <ArrowElement direction="left" onClick={goToPrevPage} />
      <label>{label}</label>
      {goToNextPage && (
        <ArrowElement direction="right" onClick={goToNextPage} />
      )}
    </div>
  );
}
