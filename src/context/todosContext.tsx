import { createContext } from "react";
// import { type baseTodoReturn as todosActionProps } from "../types";
import { useTodosContextProps } from "../types";



export const TodosContext = createContext<useTodosContextProps | undefined>(undefined)

