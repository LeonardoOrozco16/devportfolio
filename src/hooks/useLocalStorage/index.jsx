import React from "react";
function useLocalStorage() {
    const storagedThemeName = "isActiveDarkTheme";
    const [activeDarkTheme, setActiveDarkTheme] = React.useState(() => {
        let isStoraged = JSON.parse(localStorage.getItem(storagedThemeName));
        if (isStoraged === null) {
            localStorage.setItem(storagedThemeName, false);
            return false;
        } return isStoraged;
    });
    React.useEffect(() => {
        if (!activeDarkTheme) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    },[activeDarkTheme]);
    return {activeDarkTheme, setActiveDarkTheme,storagedThemeName};
}
export { useLocalStorage };