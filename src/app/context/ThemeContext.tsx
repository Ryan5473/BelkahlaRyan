"use client";

import { createContext, useContext } from "react";

type Theme = "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme: Theme = "light";

  const toggleTheme = () => {
    console.log("Dark mode is disabled. Only light mode is supported.");
  };

  const setTheme = (newTheme: Theme) => {
    void newTheme; // Use the parameter to avoid unused variable error
    console.log("Cannot change theme. Only light mode is allowed.");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
