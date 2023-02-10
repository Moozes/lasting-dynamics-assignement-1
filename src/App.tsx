import { useAuthenticationState } from "hooks/useAuthenticationState";
import { RouterProvider } from "react-router-dom";
import router from "routes";
import { authenticationContext } from "context/authentication";
function App() {
  const authenticationState = useAuthenticationState();

  return (
    <authenticationContext.Provider value={authenticationState}>
      <RouterProvider router={router} />
    </authenticationContext.Provider>
  );
}

export default App;
