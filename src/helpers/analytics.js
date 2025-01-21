import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
};

// Track a pageview
export const logPageView = ({ url }) => {
  ReactGA.set({ page: url });
  ReactGA.pageview(url);
};

// Track custom events
export const logEvent = (category = '', action = '', label = '') => {
  if (category && action) {
    ReactGA.event({ category, action, label });
  }
};

// Track exceptions
export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
