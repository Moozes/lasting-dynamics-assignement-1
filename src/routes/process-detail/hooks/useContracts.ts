import { readAll as readAllContracts } from "api/contract";
import { useEffect, useState } from "react";
import { TContract } from "types/types";
import { v4 as uuidv4 } from "uuid";


export default function useContracts() {
    const [contracts, setContracts] = useState<TContract[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        readAllContracts()
        .then(data => setContracts(data))
        .finally(() => setLoading(false))
    }, [])

    const addContract = (c: Omit<TContract, "id">) => {
        setContracts(prev => prev.concat({
            id: uuidv4(),
            ...c
        }))
    }

    return {
        contracts,
        loading,
        addContract
    }
}