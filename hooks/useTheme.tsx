import { useState, useEffect } from "react";

export type Theme = "dark" | "light";

const useTheme = (): [Theme, (theme: Theme) => void, () => void] => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark"; // SSR fallback

    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) return stored as Theme;

    // Default: match :root = dark mode
    return "dark";
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const html = document.documentElement;

    if (theme === "light") {
      html.classList.add("light");
    } else {
      html.classList.remove("light");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle between dark (root) and light
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return [theme, setTheme, toggleTheme];
};

export default useTheme;
