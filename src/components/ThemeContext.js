import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    backgroundColor: "#f0f0f0",
    textColor: "#000",
    headerColor: "#01A587",
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => ({
      backgroundColor:
        prevTheme.backgroundColor === "#f0f0f0" ? "#333" : "#f0f0f0",
      textColor: prevTheme.textColor === "#000" ? "#fff" : "#000",
      headerColor: prevTheme.headerColor === "#01A587" ? "#444" : "#01A587",
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
