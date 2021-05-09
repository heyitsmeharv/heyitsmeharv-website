import React from "react";
import styled from "styled-components";

// hooks
import { useThemeMode } from "./hooks/useThemeMode";

// styles
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, blueTheme, redTheme } from "./resources/styles/theme";
import { GlobalStyles } from "./resources/styles/global";

// pages
import Home from "./pages/Home";

// components
import Themes from "./components/Theme/Theme";
import SocialMediaBar from "./components/SocialMedia/SocialMediaBar";

const Wrapper = styled.div`
  display: flex;
`;

const App = () => {

  /* ---------------------------- theme toggle ----------------------------  */
  const [theme, toggleTheme, componentMounted] = useThemeMode();
  let themeMode;

  const getTheme = (theme) => {
    switch (theme) {
      case "light": return lightTheme;
      case "dark": return darkTheme;
      case "blue": return blueTheme;
      case "red": return redTheme;
      default: return lightTheme;
    }
  }

  themeMode = getTheme(theme);

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Wrapper>
        <Themes theme={theme} toggleTheme={toggleTheme} />
        <SocialMediaBar />
      </Wrapper>
      <Home />
    </ThemeProvider>
  );
};

export default App;
