import  {createContext} from "react";
import { useFilteredTodosReturn } from "../types";

export const filteredTodosContext = createContext<useFilteredTodosReturn | undefined>(undefined)





