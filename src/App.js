import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// hooks
import { useDarkMode } from "./helpers/hooks/useDarkMode";

// styles
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./resources/styles/theme";
import { GlobalStyles } from "./resources/styles/global";

// pages
import Home from "./pages/Home";
import CurriculumVitae from "./pages/CurriculumVitae";

// components
import Toggle from "./components/Toggle/Toggle";

const App = () => {

  /* ---------------------------- light/dark theme toggle ----------------------------  */
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
    <Toggle theme={theme} toggleTheme={toggleTheme} />
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
