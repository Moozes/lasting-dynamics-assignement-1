import { useAuthenticationContext } from "hooks/useAuthenticationContext";
import { Navigate } from "react-router-dom";

type RequiresAuthenticationProps = {
  children: JSX.Element;
};
export default function RequiresAuthentication(props: RequiresAuthenticationProps) {
  const { isAuthenticated } = useAuthenticationContext();
  if (isAuthenticated) return props.children;
  return <Navigate to="/" />;
}
