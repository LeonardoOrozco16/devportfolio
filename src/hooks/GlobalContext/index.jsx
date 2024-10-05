import React from "react";
import { useLocalStorage } from "@hooks/useLocalStorage";
const GlobalContext = React.createContext();

function GlobalProvider({children}) {
    const { activeDarkTheme, setActiveDarkTheme, storagedThemeName } = useLocalStorage();
    const [cursorPosition, setCursorPosition] = React.useState({ x: 0, y: 0 });
    const socialNetworks = [
        {id: 1, name: "github", url: "https://github.com/LeonardoOrozco16" },
        {id:2, name: "linkedin", url: "https://www.linkedin.com/in/leonardoj-orozcob/" },
        {id:3, name: "instagram" , url: "https://www.instagram.com/kuma_learns/" },
        
    ];
    const handleMouseMove = (event) => {
        setCursorPosition({ x: event.clientX, y: event.clientY });
    }
    return (
        <GlobalContext.Provider value={{activeDarkTheme, setActiveDarkTheme,storagedThemeName,cursorPosition,handleMouseMove,socialNetworks }}>
            {children}
        </GlobalContext.Provider>
    );
}

export { GlobalContext, GlobalProvider};
