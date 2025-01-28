import ReactGA from 'react-ga';
import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

// helpers
import { initGA, logPageView } from "./helpers/analytics";

// context
import { LanguageContext } from './context/languageContext';
import { UserContext } from './context/userContext';

// hooks
import { useThemeMode } from "./hooks/useThemeMode";
import { useLanguageMode } from "./hooks/useLanguageMode";
import { useUser } from "./hooks/useUser";

// styles
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, blueTheme, redTheme } from "./resources/styles/theme";
import { GlobalStyles } from "./resources/styles/global";

// pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

// components
import Themes from "./components/Theme/Theme";
import Navbar from "./components/Navbar/Navbar";
import SocialMediaBar from "./components/SocialMedia/SocialMediaBar";
import Languages from "./components/Language/Language";

// blog posts
import TheStart from "./components/Posts/TheStart";
import JavaScriptArray from "./components/Posts/JavaScriptArray";
import JavaScriptObjects from "./components/Posts/JavaScriptObjects";
import ReactAdventureGame from "./components/Posts/ReactAdventureGame";
import AWSIdentityAccessManagement from "./components/Posts/AWSIdentityAccessManagement";
import AWSElasticComputeCloud from "./components/Posts/AWSElasticComputeCloud";
import AWSDatabases from "./components/Posts/AWSDatabases";
import AWSRoute53 from "./components/Posts/AWSRoute53";
import AWSS3 from "./components/Posts/AWSS3";
import AWSStorageExtras from "./components/Posts/AWSStorageExtras";
import AWSCloudFront from "./components/Posts/AWSCloudFront";
import AWSSQS from "./components/Posts/AWSSQS";
import AWSSNS from "./components/Posts/AWSSNS";
import AWSContainers from "./components/Posts/AWSContainers";
import AWSVPC from "./components/Posts/AWSVPC";
import AWSKinesis from "./components/Posts/AWSKinesis";
import AWSDataAnalytics from "./components/Posts/AWSDataAnalytics";
import AWSServerless from "./components/Posts/AWSServerless";
import AWSMachineLearning from "./components/Posts/AWSMachineLearning";
import AWSMonitoringAudit from "./components/Posts/AWSMonitoringAudit";


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const App = () => {
  // analytics
  const [userId] = useUser();
  console.log(userId);
  useEffect(() => {
    if (window.location.hostname !== "localhost") {
      initGA();
      if (userId === null) {
        ReactGA.set({ userId });
      }
      logPageView();
    }
  }, []);


  /* ---------------------------- language toggle ----------------------------  */
  const [language, toggleLanguage] = useLanguageMode();

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
    <UserContext.Provider>
      <LanguageContext.Provider value={language}>
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
                    {!(window.location.href.indexOf("projects") > 1 || window.location.href.indexOf("blog") > 1) &&
                      <Languages language={language} toggleLanguage={toggleLanguage} />
                    }
                    <Switch location={location}>
                      <Route exact path='/' component={Home} />
                      <Route exact path='/projects' component={Projects} />
                      <Route exact path='/blog' component={Blog} />
                      {/* Add blog posts here */}
                      <Route exact path='/blog/the-start' component={TheStart} />
                      <Route exact path='/blog/javascript-arrays' component={JavaScriptArray} />
                      <Route exact path='/blog/javascript-objects' component={JavaScriptObjects} />
                      <Route exact path='/blog/react-text-based-adventure' component={ReactAdventureGame} />
                      <Route exact path='/blog/aws-identity-access-management' component={AWSIdentityAccessManagement} />
                      <Route exact path='/blog/aws-elastic-compute-cloud' component={AWSElasticComputeCloud} />
                      <Route exact path='/blog/aws-databases' component={AWSDatabases} />
                      <Route exact path='/blog/aws-route53' component={AWSRoute53} />
                      <Route exact path='/blog/aws-s3' component={AWSS3} />
                      <Route exact path='/blog/aws-storage-extras' component={AWSStorageExtras} />
                      <Route exact path='/blog/aws-cloudfront' component={AWSCloudFront} />
                      <Route exact path='/blog/aws-sqs' component={AWSSQS} />
                      <Route exact path='/blog/aws-sns' component={AWSSNS} />
                      <Route exact path='/blog/aws-kinesis' component={AWSKinesis} />
                      <Route exact path='/blog/aws-containers' component={AWSContainers} />
                      <Route exact path='/blog/aws-vpc' component={AWSVPC} />
                      <Route exact path='/blog/aws-data-analytics' component={AWSDataAnalytics} />
                      <Route exact path='/blog/aws-serverless' component={AWSServerless} />
                      <Route exact path='/blog/aws-machine-learning' component={AWSMachineLearning} />
                      <Route exact path='/blog/aws-monitoring-audit' component={AWSMonitoringAudit} />
                      <Route component={NotFound} />
                    </Switch>
                  </>
                );
              }}
            />
          </Router>
        </ThemeProvider>
      </LanguageContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
