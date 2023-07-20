import { ChangeEventHandler } from "react";

interface DefaultInputWithLabel {
  label: string;
  name: string;
  type?: "text";
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function InputWithLabel({ ...props }: DefaultInputWithLabel) {
  const { label, name, type, value, onChange } = props;

  return (
    <>
      <label>{label}</label>
      <input name={name} type={type} value={value} onChange={onChange} />
    </>
  );
}
