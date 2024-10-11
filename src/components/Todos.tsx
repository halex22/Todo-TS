import React from "react";
import { type ListOfTodos, type filterValue } from "../types";
import Todo from "./Todo";

interface Props {
  todos: ListOfTodos;
  onRemoveTodo: (id: number) => void;
  onChangeStatus: (id: number) => void;
  filter: filterValue;
}


const noTodosMessage = {
  completed: "No Todo has been completed yet",
  active: "Currently, there's no active Todo",
  all: "Please add Todos to your list",
};

export const Todos: React.FC<Props> = ({
  todos,
  onRemoveTodo,
  onChangeStatus,
  filter,
}) => {
  const completed =
    "bg-slate-200/80  rounded-xl line-through decoration-slate-800 decoration-double";

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.complete;
    if (filter === "completed") return todo.complete;
  });

  return (
    <ul className="space-y-3  w-full py-2">
      {filteredTodos.map((todo) => (
        <div className="flex" key={todo.id}>
          <li
            className={`${
              todo.complete ? completed : ""
            } p-2  border-b-2  w-full`}
          >
            <Todo
              title={todo.title}
              complete={todo.complete}
              id={todo.id}
              handleChangeStatus={() => onChangeStatus(todo.id)}
            />
          </li>

          <button>✏️</button>

          <button onClick={() => onRemoveTodo(todo.id)} className="me-4">
            <span className=" text-slate-400 hover:text-red-400 h-full">🗙</span>
          </button>
        </div>
      ))}
      {!filteredTodos.length && (
        <li className="p-2 font-semibold">{noTodosMessage[filter]}</li>
      )}
    </ul>
  );
};
