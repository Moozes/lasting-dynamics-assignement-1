import { createContext } from "react";
import { TProcess } from "types/types";

type ProcessesContext = {
    addProcess: (name: string, color: string) => void 
}

export const processesContext = createContext<ProcessesContext>(null!)