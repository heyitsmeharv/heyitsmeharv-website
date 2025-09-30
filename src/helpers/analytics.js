const GA_ID = process.env.REACT_APP_GOOGLE_ANALYTICS;

const hasGtag = () => typeof window !== "undefined" && typeof window.gtag === "function";
const g = (...args) => { if (hasGtag()) window.gtag(...args); };

let loading = null;
function loadGtagOnce() {
  if (hasGtag()) return Promise.resolve();
  if (loading) return loading;
  loading = new Promise((resolve) => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };

    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
    s.onload = () => {
      // init with SPA-safe config (no auto pageview)
      g("js", new Date());
      g("config", GA_ID, { send_page_view: false, transport_type: "beacon" });
      resolve();
    };
    document.head.appendChild(s);
  });
  return loading;
}

export const isConsentGranted = () => {
  try { return localStorage.getItem("consent") === "accepted"; } catch { return false; }
};

export const Analytics = {
  pageview: ({ path, title, location } = {}) => {
    if (!isConsentGranted() || !hasGtag()) return;
    g("event", "page_view", {
      page_title: title ?? document.title,
      page_location: location ?? window.location.href,
      page_path: path ?? (window.location.pathname + window.location.search),
    });
  },

  event: (name, params = {}) => {
    if (!isConsentGranted() || !hasGtag()) return;
    g("event", name, params);
  },

  sessionStart: () => {
    if (!isConsentGranted() || !hasGtag()) return;
    g("event", "session_start");
  },

  async consentAccept() {
    try { localStorage.setItem("consent", "accepted"); } catch { }
    if (!GA_ID) return;
    await loadGtagOnce();

    g("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    });

    Analytics.sessionStart();
    Analytics.pageview();
  },

  consentRevoke() {
    try { localStorage.setItem("consent", "declined"); } catch { }
    if (hasGtag()) {
      g("consent", "update", {
        ad_storage: "denied",
        analytics_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
  },
};