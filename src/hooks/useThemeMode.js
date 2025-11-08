import { useEffect, useState } from "react";
export const useThemeMode = () => {
  const [theme, setTheme] = useState("light");
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = (theme) => {
    switch (theme) {
      case "light": return setMode("light");
      case "dark": return setMode("dark");
      case "blue": return setMode("blue");
      case "red": return setMode("red");
      case "green": return setMode("green");
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
