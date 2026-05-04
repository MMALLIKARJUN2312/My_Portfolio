import {createContext, useState, useEffect} from 'react';

export const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({children} : any) => {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}