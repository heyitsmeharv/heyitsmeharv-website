// const GA_ID = process.env.REACT_APP_GOOGLE_ANALYTICS;

const hasGtag = () => typeof window !== 'undefined' && typeof window.gtag === 'function';
const g = (...args) => { if (hasGtag()) window.gtag(...args); };

export const isConsentGranted = () => {
  try { return localStorage.getItem('consent') === 'accepted'; } catch { return false; }
};

export const Analytics = {
  pageview: ({ path, title, location }) => {
    if (!isConsentGranted()) return;
    g('event', 'page_view', {
      page_title: title ?? document.title,
      page_location: location ?? window.location.href,
      page_path: path
    });
  },

  event: (name, params = {}) => {
    if (!isConsentGranted()) return;
    g('event', name, params);
  },

  sessionStart: () => {
    if (!isConsentGranted()) return;
    g('event', 'session_start');
  },

  consentAccept: () => {
    try { localStorage.setItem('consent', 'accepted'); } catch { }
    g('consent', 'update', {
      'ad_storage': 'granted',
      'analytics_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted'
    });
    Analytics.sessionStart();
    Analytics.pageview({ path: window.location.pathname + window.location.search });
  },

  consentRevoke: () => {
    try { localStorage.setItem('consent', 'declined'); } catch { }
    g('consent', 'update', {
      'ad_storage': 'denied',
      'analytics_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied'
    });
  }
};