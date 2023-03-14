interface ButtonProps extends React.InputHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button className="bg-gray-300 px-4 py-1 rounded w-4/6" onClick={onClick}>
      {children}
    </button>
  );
}
