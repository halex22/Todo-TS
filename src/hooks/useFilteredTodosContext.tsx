import { useContext } from "react";
import { filteredTodosContext } from "../context/filterContext";
import { type useFilteredTodosReturn } from "../types";



export const useFilteredTodosContext = (): useFilteredTodosReturn => {
    const context = useContext(filteredTodosContext)

    if (!context) {
        throw new Error('useFilteredTodosContext must be used within a FilteredTodosProvider')
    }

    return context
} 