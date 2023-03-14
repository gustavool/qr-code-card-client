interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function InputText({
  label,
  placeholder,
  type = "text",
}: InputTextProps) {
  return (
    <div className="flex flex-row h-8 w-full">
      {!!label && (
        <label
          className="bg-gray-300 px-4 py-1 rounded-l w-2/6 text-center"
          htmlFor={label}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        id={label}
        className="px-4 py-1 h-full w-full border-solid border-2 border-gray-300 rounded-r"
      />
    </div>
  );
}
