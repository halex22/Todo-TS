import { useState, useEffect } from "react";
import { type ListOfTodos } from "../types";
import { type filterValue } from "../types";
import { useTodos } from "./useTodos";
import { useFilteredTodosReturn } from "../types";



export const useFilteredTodos = (): useFilteredTodosReturn => {
  
  const { todos } = useTodos()
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

  return { filter, filteredTodos, handleFilterChange }
};
