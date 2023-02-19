import { useEffect, useState } from "react";
import { TProcess } from "types/types";
import { readAll as readAllProcesses } from "api/process";
import { v4 as uuidv4 } from "uuid";

export default function useProcesses() {
    const [processes, setprocesses] = useState<TProcess[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        readAllProcesses()
        .then(data => setprocesses(data))
        .finally(() => setLoading(false))
    }, [])

    const addProcess = (name: string, color: string) => {
        setprocesses(prev => prev.concat({
            id: uuidv4(),
            text: name,
            controls: false,
            isPrivate: false,
            icon: "board",
            bgColor: color
        }))
    }

    return {
        processes,
        loading,
        addProcess
    }
}