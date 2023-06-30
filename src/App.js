import ReactGA from 'react-ga';
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

// hooks
import { useThemeMode } from "./hooks/useThemeMode";

// styles
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, blueTheme, redTheme } from "./resources/styles/theme";
import { GlobalStyles } from "./resources/styles/global";

// pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";

// components
import Themes from "./components/Theme/Theme";
import Navbar from "./components/Navbar/Navbar";
import SocialMediaBar from "./components/SocialMedia/SocialMediaBar";

// blog posts
import TheStart from "./components/Posts/TheStart";
import JavaScriptArray from "./components/Posts/JavaScriptArray";
import JavaScriptObjects from "./components/Posts/JavaScriptObjects";
import ReactAdventureGame from "./components/Posts/ReactAdventureGame";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);

const App = () => {
  // analytics
  useEffect(() => {
    ReactGA.pageview('/homepage');
  }, []);

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
      <Router>
        <Route
          render={({ location }) => {
            return (
              <>
                <Navbar />
                <Switch location={location}>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/projects' component={Projects} />
                  <Route exact path='/blog' component={Blog} />
                  {/* Add blog posts here */}
                  <Route exact path='/blog/the-start' component={TheStart} />
                  <Route exact path='/blog/javascript-arrays' component={JavaScriptArray} />
                  <Route exact path='/blog/javascript-objects' component={JavaScriptObjects} />
                  <Route exact path='/blog/react-text-based-adventure' component={ReactAdventureGame} />
                </Switch>
              </>
            );
          }}
        />
      </Router>
    </ThemeProvider>
  );
};

export default App;
