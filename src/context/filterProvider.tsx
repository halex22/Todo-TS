import { filteredTodosContext } from "./filterContext"
import { useFilteredTodos } from "../hooks/useFilteredTodos"


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