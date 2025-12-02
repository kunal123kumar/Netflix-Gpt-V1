import { forwardRef } from "react";

const InputBox = forwardRef(({ type, placeholder }, ref) => {
  return (
    <div>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className="w-full p-3 mb-4 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
      />
    </div>
  );
});

export default InputBox;
