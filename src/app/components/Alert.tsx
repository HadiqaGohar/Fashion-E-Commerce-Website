import React from "react";

// Define proper types for the props
interface AlertProps {
  message: string;
  onClose: () => void;
}

const Alert = ({ message, onClose }: AlertProps) => {
  return (
    <div className="fixed top-0 left-0 w-full bg-red-500 text-white p-4 flex justify-between items-center z-50">
      <span>{message}</span>
      <button
        onClick={onClose}
        className="bg-white text-red-500 px-4 py-2 rounded hover:bg-gray-200"
      >
        Close
      </button>
    </div>
  );
};

export default Alert;
