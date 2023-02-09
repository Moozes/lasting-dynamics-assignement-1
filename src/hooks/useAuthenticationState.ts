import { useState } from "react";
import { getAuthenticationFromLocalStorage } from "utils/utils";

export function useAuthenticationState() {
    const [isAuthenticated, setIsAuthenticated] = useState(() => getAuthenticationFromLocalStorage())
    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true");
    }
    const logout = () => {
        setIsAuthenticated(false)
        localStorage.removeItem("isAuthenticated")
    }

    return {
        isAuthenticated,
        login,
        logout
    } 
}