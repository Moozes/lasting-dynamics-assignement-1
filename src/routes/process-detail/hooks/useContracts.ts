import { readAll as readAllContracts } from "api/contract";
import { useEffect, useState } from "react";
import { TContract } from "types/types";

export default function useContracts() {
    const [contracts, setContracts] = useState<TContract[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        readAllContracts()
        .then(data => setContracts(data))
        .finally(() => setLoading(false))
    }, [])

    return {
        contracts,
        loading
    }
}