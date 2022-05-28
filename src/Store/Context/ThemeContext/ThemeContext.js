//@ts-check
import { createContext, useState, useEffect } from "react";
import { useLocalStorage } from "../../../Utils/Hooks/useLocalStorage/useLocalStorage";

export const ThemeContext = createContext({
  isDarkMode: null,
  toggleTheme: null,
  theme: null
});

export function ThemeContextProvider({ children }) {
  const { getStorage, setStorage } = useLocalStorage("themeState");
  const [isDarkMode, setIsDarkMode] = useState(getStorage() ?? true);
  const theme = {
    background: isDarkMode ? "#212529" : "#f4f5f7",
    color: isDarkMode ? "#f8f9fa" : "#000000",
    colorTwo: isDarkMode ? "#adb5bd" : "#6c7279",
    colorThree: isDarkMode ? "#868e96" : "#495057",
    depthColor: isDarkMode ? "#343A40" : "#E9ECEF",
    depthColorTwo: isDarkMode ? "#495057" : "#DEE2E6",
    brandColor: isDarkMode ? "#748ffc" : "#91A7FF",
    brandColorDisabled: isDarkMode ? "#3b5bdb" : "#4263eb",
    helperColor: isDarkMode ? "#6e5ce4" : "#d9d1fd",
    helperColorTwo: isDarkMode ? "#4fa5fc" : "#cee4fe",
    helperColorThree: isDarkMode ? "#50206a" : "#6368ea",
    light: "#F8F9FA",
    dark: "#212429",
    error: "#e91e63",
    success: "#05d69d",
    info: "#0299e2",
    warning: "#faad43"
  };
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setStorage(!isDarkMode);
  };
  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    // @ts-ignore
    meta.content = theme.background;
  }, [theme.background]);
  return (
    <ThemeContext.Provider value={{ isDarkMode, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
