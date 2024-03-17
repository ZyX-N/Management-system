import React from "react";

export function ButtonCreate({ type = "button", classes, text, onClick }) {
  return (
    <button
      className={`bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md ${classes}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
