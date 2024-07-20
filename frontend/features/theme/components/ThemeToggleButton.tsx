"use client"

import useTheme from '@/features/theme/hooks/useTheme';

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <div className="ThemeToggleButton">
            {/* <div className="flex justify-end"> */}
                    <button
                    onClick={toggleTheme}
                    className="shadow-md text-sm font-medium flex rounded-full px-2 py-1 
                    bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-100 dark:text-gray-900
                    dark:hover:bg-gray-200
                    dark:shadow-md"
                    >
                        {theme === "light" ? "Dark" : "Light"}
                    </button> 
            {/* </div> */}
            
        </div>
    );
};

export default ThemeToggleButton;