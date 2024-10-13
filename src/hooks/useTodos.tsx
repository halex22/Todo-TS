import { useEffect, useState } from "react";
import { type ListOfTodos } from "../types";
import { type Todo as TodoType } from "../types"
import mockTodo from "../mocks.mts";


export interface baseTodoReturn {
  handleAdd: (title: string) => void;
  changeTodoStatus: (id: number) => void;
  handleRemove: (id: number) => void;
}

interface useTodoReturn extends baseTodoReturn {
  todos: ListOfTodos;
}

export const useTodos = (): useTodoReturn => {

  const [ todos, setTodos ] = useState<ListOfTodos>([])

  const handleRemove = (id: number): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleAdd = (title: string): void => {
    if (!title) return
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

  return {todos, handleRemove, handleAdd, changeTodoStatus}
};
