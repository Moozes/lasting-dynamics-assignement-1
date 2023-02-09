import { useState } from "react";

export function useAuthenticationState() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const login = () => {
        setIsAuthenticated(true)
    }
    const logout = () => {
        setIsAuthenticated(false)
    }

    return {
        isAuthenticated,
        login,
        logout
    } 
}