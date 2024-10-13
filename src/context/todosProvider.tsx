import { useTodos } from "../hooks/useTodos"
import { TodosContext } from "./todosContext"


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
  