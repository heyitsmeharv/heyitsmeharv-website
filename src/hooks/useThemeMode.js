import { useEffect, useState } from "react";
export const useThemeMode = () => {
  const [theme, setTheme] = useState("light");
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = (theme) => {
    switch(theme) {
      case "light": return setMode("light");
      case "dark": return setMode("dark");
      case "summer": return setMode("summer");
      case "spring": return setMode("spring");
      case "winter": return setMode("winter"); 
      case "autum": return setMode("autum");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setMode("light");
    }
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
