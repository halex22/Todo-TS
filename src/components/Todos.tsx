import React from "react";
import Todo from "./Todo";
import { useFilteredTodosContext } from "../hooks/useFilteredTodosContext";


const noTodosMessage = {
  completed: "No Todo has been completed yet",
  active: "Currently, there's no active Todo",
  all: "Please add Todos to your list",
};

export const Todos: React.FC = () => {

  const {filteredTodos, filter} = useFilteredTodosContext()

  return (
    <ul className="space-y-3  w-full py-2">
      {filteredTodos.map((todo) => (
        <div className="flex" key={todo.id}>
          <li className="p-2  border-b-2  w-full">
            <Todo
              title={todo.title}
              complete={todo.complete}
              id={todo.id}
            />
          </li>        
        </div>
      ))}
      {!filteredTodos.length && (
        <li className="p-2 font-semibold">{noTodosMessage[filter]}</li>
      )}
    </ul>
  );
};
