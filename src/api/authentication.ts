import { TUser } from "types/types";
import { axsiosInstance } from "./axiosInstance";


export async function login(email: string, password: string) {
    try {
        const {data: usersFromServer} = await axsiosInstance.get<TUser[]>(`user?email=${email}`)
        const userValid = usersFromServer.find(user => user.email === email && user.password === password)
        return userValid ? true : false 
    }catch(e) {
        console.log(e);
        return false
    }
}
