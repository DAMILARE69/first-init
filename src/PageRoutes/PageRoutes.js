import { AnimatePresence } from "framer-motion/dist/framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "../Pages/AuthRequiredPages/Dashboard/Dashboard";
import ForgotPassword from "../Pages/NoAuthRequiredPages/Authentication/ForgotPassword";
import Login from "../Pages/NoAuthRequiredPages/Authentication/Login";
import Signup from "../Pages/NoAuthRequiredPages/Authentication/Signup";
import Homepage from "../Pages/NoAuthRequiredPages/Homepage/Homepage";
import { AuthRequiredRoutes } from "./AuthRequiredRoutes";
import { NoAuthRequiredRoutes } from "./NoAuthRequiredRoutes";
export function PageRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.id}>
        <Route element={<NoAuthRequiredRoutes />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route element={<AuthRequiredRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </AnimatePresence>
  );
}
