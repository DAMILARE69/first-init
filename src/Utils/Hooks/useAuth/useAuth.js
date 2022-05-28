import { useContext } from "react";
import { AuthContext } from "../../../Store/Context/AuthContext/AuthContext";

export const useAuth = () => {
  return useContext(AuthContext);
};
