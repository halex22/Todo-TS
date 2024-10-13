import { useState, useEffect } from "react"
import { type Todo as TodoType } from "../types"
import mockTodo from "../mocks.mts"
import { TodosContext } from "./todosContext"
import { ListOfTodos } from "../types"


export const TodosProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
  
  const [ todos, setTodos ] = useState<ListOfTodos>([])

  const handleRemove = (id: number): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleAdd = (title: string): void => {
    if (!title) return
    console.log('adding')
    console.log(todos.length)
    const lastIndex = todos[todos.length -1 ]?.id ?? 0
    const newTodo: TodoType = {
      id: lastIndex + 1,
      title: title,
      complete: false
    }
    setTodos((prevState) => [...prevState, newTodo])
  }

  const changeTodoStatus = (id: number): void => {
    const oldTodos = structuredClone(todos) 
    oldTodos.forEach(todo => {
      if (todo.id === id) todo.complete = !todo.complete
    })
    setTodos(oldTodos)
  }

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos) as ListOfTodos)
    } else {
      setTodos(mockTodo)
    }
  }, [])
  
    return (
      <TodosContext.Provider
        value={{
          handleAdd,
          handleRemove,
          changeTodoStatus,
          todos
        }}
      >
        { children }
      </TodosContext.Provider>
    )
  }
  