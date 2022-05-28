import { useEffect } from "react";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { APP } from "./AppStyles";
import { PageRoutes } from "./PageRoutes/PageRoutes";
import { useAuth } from "./Utils/Hooks/useAuth/useAuth";
import { useTheme } from "./Utils/Hooks/useTheme/useTheme";

export function App() {
  const { theme } = useTheme();
  const { authIsReady } = useAuth();
  const disableContext = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    const disableContext = document.addEventListener("keydown", (event) => {
      if (event.code === "KeyI" && event.ctrlKey && event.shiftKey) {
        event.preventDefault();
      }
      event.code === "F12" && event.preventDefault();
    });
    return disableContext;
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <APP
        className={!authIsReady && "preloader"}
        onContextMenu={disableContext}>
        <GlobalStyles />
        {authIsReady ? <PageRoutes /> : <h2>Loading......</h2>}
      </APP>
    </ThemeProvider>
  );
}
