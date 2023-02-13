import { createContext } from "react";
import { TContract } from "types/types";

type ContractsContext = {
    contracts: TContract[];
    addContract: (contract: Omit<TContract, "id">) => void;
    loading: boolean;
}

export const contractsContext = createContext<ContractsContext>(null!)