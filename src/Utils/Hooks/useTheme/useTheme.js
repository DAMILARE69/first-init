import { useContext } from "react";
import { ThemeContext } from "../../../Store/Context/ThemeContext/ThemeContext";

export const useTheme = () => {
  return useContext(ThemeContext);
};
