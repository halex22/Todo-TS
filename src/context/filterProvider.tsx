import { filteredTodosContext } from "./filterContext"
import { useState, useEffect } from "react"
import { useTodosContext } from "../hooks/useTodosContext"
import  {type filterValue, type ListOfTodos } from "../types"


export const FilteredTodosProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
  const { todos } = useTodosContext()
  const [ filter, setFilter ] = useState<filterValue>('all')
  const [ filteredTodos, setFilteredTodos ] = useState<ListOfTodos>([])

  const handleFilterChange = (newFilter: filterValue) => {
    setFilter(newFilter)
  }

  useEffect(() => {
    console.log(todos.length)
    const filterResult = todos.filter(todo => {
      if (filter === 'all') return true
      if (filter === 'active') return !todo.complete
      if (filter === 'completed') return todo.complete
    }) 
    setFilteredTodos(filterResult)
  }, [filter, todos])
  
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