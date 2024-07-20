// "use client"

import { useEffect, useState } from "react";

const useTheme = () => {
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    useEffect(() => {
        // Check for user preference in `localStorage`
        const storedTheme = localStorage.getItem("theme") as "light" | "dark";
        if (storedTheme) {
            setTheme(storedTheme);
        } else {
            // If no preference, check system preference
            const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            setTheme(systemPreference);
        };
    }, []);

    useEffect(() => {
        // if `theme` === "dark", class `dark` is added to `<html>` element of document.
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        };
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return { theme, toggleTheme };
};

export default useTheme;