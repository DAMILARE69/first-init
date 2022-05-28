import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Utils/Hooks/useAuth/useAuth";
export function NoAuthRequiredRoutes() {
  const { user } = useAuth();
  return user ? <Navigate to="/dashboard" /> : <Outlet />;
}
