import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// hooks
import { useThemeMode } from "./hooks/useThemeMode";

// styles
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, springTheme, summerTheme, winterTheme, autumTheme } from "./resources/styles/theme";
import { GlobalStyles } from "./resources/styles/global";

// pages
import Home from "./pages/Home";
import CurriculumVitae from "./pages/CurriculumVitae";

// components
import Themes from "./components/Theme/Theme";

const App = () => {

  /* ---------------------------- theme toggle ----------------------------  */
  const [theme, toggleTheme, componentMounted] = useThemeMode();
  let themeMode;

  const getTheme = (theme) => {
    switch (theme) {
      case "light": return lightTheme;
      case "dark": return darkTheme;
      case "summer": return summerTheme;
      case "spring": return springTheme;
      case "winter": return winterTheme;
      case "autum": return autumTheme;
    }
  }

  themeMode = getTheme(theme);

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Themes theme={theme} toggleTheme={toggleTheme} />
      <Router>
        <Route
          render={({ location }) => {
            return (
              <Switch location={location}>
                <Route exact path='/' component={Home} />
                <Route exact path='/cv' component={CurriculumVitae} />
              </Switch>
            );
          }}
        />
      </Router>
    </ThemeProvider>
  );
};

export default App;
