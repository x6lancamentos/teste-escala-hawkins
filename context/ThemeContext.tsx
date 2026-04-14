"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ThemeContextType {
  colors: {
    bg: string;
    bgSecondary: string;
    text: string;
    textSecondary: string;
    gold: string;
    goldLight: string;
    alert: string;
    success: string;
  };
}

const themeColors = {
  bg: "#0A0A0A",
  bgSecondary: "#1A1A1A",
  text: "#FFFFFF",
  textSecondary: "#E0E0E0",
  gold: "#D4AF37",
  goldLight: "#E5C158",
  alert: "#8B0000",
  success: "#50C878",
};

const ThemeContext = createContext<ThemeContextType>({
  colors: themeColors,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeContext.Provider value={{ colors: themeColors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
