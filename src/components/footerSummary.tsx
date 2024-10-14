import React, {useEffect, useState } from "react";
import { useTodosContext } from "../hooks/useTodosContext";


export const FooterSummary: React.FC = () => {

  const [ completedTodos, setCompletedTodos] = useState<number>(0)

  const { todos, restoreInstructions } = useTodosContext()

  useEffect(() => {
    const completed = todos.reduce((count, todo) => {
      return todo.complete ? count + 1 : count
    }, 0)
    setCompletedTodos(completed)
  }, [todos])

  return (
    <footer className="text-right me-1">
      <small className="font-bold">
          Completed {completedTodos} of Total {todos.length} 
        </small>

        <div>
          <button onClick={restoreInstructions}>
            <small className="hover:underline underline-offset-2">Restore instructions</small>
          </button>
        </div>

    </footer>
  )
}