import { useEffect, useState } from "react";
export const useLanguageMode = () => {
  const [language, setLanguage] = useState("EN");
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem("language", mode);
    setLanguage(mode);
  };

  const toggleLanguage = (language) => {
    switch(language) {
      case "EN": return setMode("EN");
      case "ES": return setMode("ES");
    }
  };

  useEffect(() => {
    const localLanguage = window.localStorage.getItem("language");
    if (localLanguage) {
      setLanguage(localLanguage);
    } else {
      setMode("EN");
    }
    setComponentMounted(true);
  }, []);

  return [language, toggleLanguage, componentMounted];
};
