import { createContext } from "react";


type AuthenticationContext = {
    isAuthenticated: boolean;
    login: VoidFunction;
    logout: VoidFunction;
}

export const authenticationContext = createContext<AuthenticationContext>(null!)