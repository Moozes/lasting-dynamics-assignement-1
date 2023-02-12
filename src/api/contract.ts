import { TContract } from "types/types";
import { axsiosInstance } from "./axiosInstance";

export async function readAll() {
    try {
        const {data: contracts} = await axsiosInstance.get<TContract[]>("contract")
        return contracts
    }catch(e) {
        console.log(e);
        return []
    }
}