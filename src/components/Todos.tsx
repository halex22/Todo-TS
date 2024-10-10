import React from "react";
import { type ListOfTodos } from "../types";
import Todo from "./Todo";

interface Props {
  todos: ListOfTodos;
  onRemoveTodo: (id: number) => void;
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo }) => {
  const completed = "bg-slate-200/80  rounded-xl line-through";

  return (
    <>
    <ul className="space-y-3  w-full">
      {todos.map((todo, index) => (
        <div className="flex" key={index}>
          <li
            
            className={`${todo.complete ? completed : ""} p-2  border-b-2  w-full`}
          >
            <Todo
              title={todo.title}
              complete={todo.complete}
              id={todo.id}
            />
          </li>
          <button onClick={() => onRemoveTodo(todo.id)} className="pb-1 me-4">
            <span className=" text-slate-400 hover:text-red-400 h-full">🗙</span>
          </button>
        </div>
      ))}
    </ul>

    </>
  );
};
