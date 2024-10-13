import { createContext } from "react";
import { type baseTodoReturn as todosActionProps } from "../types";


export const TodosContext = createContext<todosActionProps | undefined>(undefined)

