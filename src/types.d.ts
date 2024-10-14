import { TODO_FILTERS } from "./const"

export interface Todo {
  id: number,
  title: string,
  complete: boolean
  addedByUser?: boolean 
}

export interface useFilteredTodosReturn {
  filteredTodos: ListOfTodos;
  filter: filterValue;
  handleFilterChange: (newFilterValue: filterValue) => void
}

export interface TodosProps {
  todos: ListOfTodos;
  onRemoveTodo: (id: number) => void;
  onChangeStatus: (id: number) => void;
  filter: filterValue;
}

export interface baseTodoReturn {
  handleAdd: (title: string) => void;
  changeTodoStatus: (id: number) => void;
  handleRemove: (id: number) => void;
  handleEditTodo: (id: number, newTitle: string) => void
}

export interface useTodosContextProps extends baseTodoReturn {
  todos: ListOfTodos
  restoreInstructions: () => void
}


export type ListOfTodos = Todo[]


export type filterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]