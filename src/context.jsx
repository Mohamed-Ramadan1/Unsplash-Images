import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDartkTheme, setIsDartkTheme] = useState(true);
  const toggleDarkThem = () => {
    const newDarkThem = !isDartkTheme;
    setIsDartkTheme(newDarkThem);
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", newDarkThem);
  };

  return (
    <AppContext.Provider value={{ isDartkTheme, toggleDarkThem }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
