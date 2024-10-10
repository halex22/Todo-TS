import { TODO_FILTERS } from "./const"

export interface Todo {
  id: number,
  title: string,
  complete: boolean
}

export type ListOfTodos = Todo[]


export type filterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]