// import { type Todo as todoType } from "../types"
import { useState } from "react"
import { useTodosContext } from "./useTodosContext"

interface useEditTodoReturn {
  currentTodoTitleValue: string
  handleInputChange: (newTodoValue: string) => void
  saveChanges: (todoID: number) => void
}

export const useEditTodo = ( baseTodoTitle: string ): useEditTodoReturn => {

  const { handleEditTodo } = useTodosContext()

  const [ currentTodoTitleValue, setCurrentTodoTitleValue ] = useState<string>(baseTodoTitle)

  const handleInputChange = (newTodoValue: string): void => {
    setCurrentTodoTitleValue(newTodoValue)
  }

  const saveChanges = (todoID: number): void => {
    handleEditTodo(todoID, currentTodoTitleValue)
  }

  return { currentTodoTitleValue, handleInputChange, saveChanges}
}