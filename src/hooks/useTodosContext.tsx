import { useContext } from "react";
import { TodosContext } from "../context/todosContext";
import { type baseTodoReturn } from "../types";

// export const useTodosContext()
export const useTodosContext = (): baseTodoReturn => {
    const context = useContext(TodosContext)

    if (!context) {
        throw new Error('useTodosContext must be used within a TodosProvider')
    }

    return context
}