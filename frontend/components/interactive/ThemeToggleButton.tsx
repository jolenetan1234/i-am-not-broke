"use client"

import useTheme from '@/hooks/useTheme';

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <div className="ThemeToggleButton">
            {/* <div className="flex justify-end"> */}
                    <button
                    onClick={toggleTheme}
                    className="text-sm font-medium flex rounded-full bg-gray-900 px-2 py-1 text-white dark:bg-gray-100 dark:text-gray-900"
                    >
                        {theme === "light" ? "Dark" : "Light"}
                    </button> 
            {/* </div> */}
            
        </div>
    );
};

export default ThemeToggleButton;