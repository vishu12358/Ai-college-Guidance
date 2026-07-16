type InputProps = {
  label: string;
  type?: string;
  placeholder?: string;
};

const Input = ({
  label,
  type = "text",
  placeholder,
}: InputProps) => {
  return (
    <div>
      <label className="block mb-2 font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Input;