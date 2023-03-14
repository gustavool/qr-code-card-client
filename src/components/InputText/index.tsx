interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function InputText({
  label,
  placeholder,
  type = "text",
}: InputTextProps) {
  return (
    <>
      <label
        className="bg-gray-300 px-4 py-1 rounded-l inline-block h-8"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={label}
        className="px-4 py-1 h-full border-solid border-2 border-gray-300 rounded-r"
      />
    </>
  );
}
