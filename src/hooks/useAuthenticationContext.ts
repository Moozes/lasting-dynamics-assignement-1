import { authenticationContext } from "context/authentication";
import { useContext } from "react";

export function useAuthenticationContext() {
    return useContext(authenticationContext)
}