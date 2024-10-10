import React, { useState } from "react";

interface Props {
  onAddTodo: (title: string) => void;
}

export const AddTodo: React.FC<Props> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  return (
    <div className="my-2 space-x-4 ps-1">
      <label htmlFor="" className="text-slate-500 font-bold">
        New Todo{" "}
      </label>

      <input
        type="text"
        className="focus:outline-none border-4 rounded-lg"
        value={inputValue}
        onChange={handleChange}
      />
      <button
        className="border-2 px-2 py-1 rounded-lg bg-slate-200 hover:bg-slate-300"
        onClick={() => {
          onAddTodo(inputValue);
          setInputValue('')
        }}
      >
        <span className="text-slate-500 font-bold">Add</span>
      </button>
    </div>
  );
};
