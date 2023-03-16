import * as S from "./styles";

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function InputText({
  label,
  placeholder,
  onChange,
  name,
  type = "text",
}: InputTextProps) {
  return (
    <S.Wrapper>
      {!!label && <label htmlFor={label}>{label}</label>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        id={label}
        onChange={onChange}
      />
    </S.Wrapper>
  );
}
