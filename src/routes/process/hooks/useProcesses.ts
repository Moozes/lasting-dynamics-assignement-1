import { useEffect, useState } from "react";
import { TProcess } from "types/types";
import { readAll as readAllProcesses } from "api/process";

export default function useProcesses() {
    const [processes, setprocesses] = useState<TProcess[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        readAllProcesses()
        .then(data => setprocesses(data))
        .finally(() => setLoading(false))
    }, [])

    return {
        processes,
        loading
    }
}