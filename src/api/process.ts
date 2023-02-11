import { axsiosInstance } from "./axiosInstance";
import { TProcess } from "types/types";
import axios from "axios";

export async function readAll() {
    try {
        const {data: processes} = await axios.get<TProcess[]>("process")
        return processes
    }catch(e) {
        console.log(e)
        return []
    }
}