import React, {createContext} from "react";
import { useFilteredTodos } from "../hooks/useFilteredTodos";
import { useFilteredTodosReturn } from "../types";

const filteredTodosContext = createContext<useFilteredTodosReturn | undefined>(undefined)


export const FilteredTodosProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
  
  const { filteredTodos, filter, handleFilterChange } = useFilteredTodos()

  return (
    <filteredTodosContext.Provider
      value={{
        filteredTodos,
        filter,
        handleFilterChange
      }}  
    >
      { children }
    </filteredTodosContext.Provider>
  )
}


