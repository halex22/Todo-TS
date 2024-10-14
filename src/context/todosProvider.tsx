import { useState, useEffect, useRef } from "react"
import { type Todo as TodoType } from "../types"
import mockTodo from "../mocks.mts"
import { TodosContext } from "./todosContext"
import { ListOfTodos } from "../types"


export const TodosProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
  
  const [ todos, setTodos ] = useState<ListOfTodos>([])

  const userHasAddTodo = useRef<boolean>(false)

  const handleRemove = (id: number): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    saveTodos(newTodos)
    // setTodos(newTodos)
  }

  const handleAdd = (title: string): void => {
    if (!title) return
    console.log('adding')
    console.log(todos.length)
    const lastIndex = todos[todos.length -1 ]?.id ?? 0
    const newTodo: TodoType = {
      id: lastIndex + 1,
      title: title,
      complete: false,
      addedByUser: true
    }
    const newTodoArray = [...structuredClone(todos), newTodo]
    if (!userHasAddTodo.current) userHasAddTodo.current = true
    saveTodos(newTodoArray)
  }

  const saveTodos = (todosToSave: ListOfTodos): void => {
    if (userHasAddTodo.current) localStorage.setItem('userTodos', JSON.stringify(todosToSave))
    setTodos(todosToSave)
  }

  const changeTodoStatus = (id: number): void => {
    const oldTodos = structuredClone(todos) 
    oldTodos.forEach(todo => {
      if (todo.id === id) todo.complete = !todo.complete
    })
    saveTodos(oldTodos)
  }

  const handleEditTodo = (id: number, newTitle: string): void => {
    const oldTodos = structuredClone(todos)
    oldTodos.forEach(todo => {
      if (todo.id === id) todo.title = newTitle
    })
    saveTodos(oldTodos)
  }

  const restoreInstructions = (): void => {
    const cleanedTodos = todos.filter(todo => todo.addedByUser)
    const todosWithInstructions = [...mockTodo, ...cleanedTodos]
    saveTodos(todosWithInstructions)
  }

  useEffect(() => {
    const savedTodos = localStorage.getItem('userTodos')
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos) as ListOfTodos)
      userHasAddTodo.current = true
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
          handleEditTodo,
          todos,
          restoreInstructions
        }}
      >
        { children }
      </TodosContext.Provider>
    )
  }
  