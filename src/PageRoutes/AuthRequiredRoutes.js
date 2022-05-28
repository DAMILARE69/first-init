import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Utils/Hooks/useAuth/useAuth";
export function AuthRequiredRoutes() {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/sign-up" />;
}
