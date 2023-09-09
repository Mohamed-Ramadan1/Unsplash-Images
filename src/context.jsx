import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const greating = "Hello";
  return (
    <AppContext.Provider value={{ greating }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
