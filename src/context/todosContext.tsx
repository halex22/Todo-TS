import React, { createContext } from "react";
import { baseTodoReturn as todosActionProps } from "../hooks/useTodos";
import { useTodos } from "../hooks/useTodos";


const TodosContext = createContext<todosActionProps | undefined>(undefined)

export const TodosProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
  
  const { handleAdd, handleRemove, changeTodoStatus } = useTodos()

  return (
    <TodosContext.Provider
      value={{
        handleAdd,
        handleRemove,
        changeTodoStatus
      }}
    >
      { children }
    </TodosContext.Provider>
  )
}
