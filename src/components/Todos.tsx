import React from "react";
import { type ListOfTodos, type filterValue } from "../types";
import Todo from "./Todo";

interface Props {
  todos: ListOfTodos;
  onRemoveTodo: (id: number) => void;
  onChangeStatus: (id: number) => void;
  filter: filterValue;
}

export const Todos: React.FC<Props> = ({
  todos,
  onRemoveTodo,
  onChangeStatus,
  filter,
}) => {
  const completed = "bg-slate-200/80  rounded-xl line-through";

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true
    if (filter === 'active') return !todo.complete
    if (filter === 'completed') return todo.complete
  })

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
          <button onClick={() => onRemoveTodo(todo.id)} className="pb-1 me-4">
            <span className=" text-slate-400 hover:text-red-400 h-full">
              🗙
            </span>
          </button>
        </div>
      ))}

    </ul>
  );
};
