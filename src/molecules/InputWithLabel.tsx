import { ChangeEventHandler } from "react";

interface DefaultInputWithLabel {
  label: string;
  name: string;
  type?: "text";
  value: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function InputWithLabel({ ...props }: DefaultInputWithLabel) {
  const { label, name, type, value, placeholder, onChange } = props;

  return (
    <>
      <label>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
}
