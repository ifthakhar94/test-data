import React, { Children, createContext, useState } from "react";

const context = createContext();
const ThemeProvider = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
