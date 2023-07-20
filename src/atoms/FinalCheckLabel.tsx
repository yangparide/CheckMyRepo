interface DefaultFinalCheckLabel {
  isValueBlank: boolean;
  placeholder: string;
  value: string;
}

export default function FinalCheckLabel({ ...props }: DefaultFinalCheckLabel) {
  const { isValueBlank, placeholder, value } = props;

  return (
    <p className={isValueBlank === true ? "blank-value" : ""}>
      /{isValueBlank === true ? placeholder : value}
    </p>
  );
}
