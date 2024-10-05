import React from "react";
import { GlobalContext } from "@hooks/GlobalContext";
import { LightIcon } from "../SVGComponents/IconsComponents/LightIcon";
import { DarkIcon } from "../SVGComponents/IconsComponents/DarkIcon";
function ThemeToggleButton({estilos,iconLight,iconDark}) {
    const { activeDarkTheme, setActiveDarkTheme,storagedThemeName} = React.useContext(GlobalContext);
    return (<>
        <button className={estilos} type="button" onClick={(event) => {
            event.preventDefault();
            setActiveDarkTheme(() => {
                localStorage.setItem(storagedThemeName, !activeDarkTheme);
                return !activeDarkTheme;
            });
        }} aria-label="Theme toggle">
            {activeDarkTheme && (<DarkIcon size={"2em"} color={iconDark} />)}
            {!activeDarkTheme && (<LightIcon size={"2em"} color={iconLight} />)}
        </button>
    </>);
}
export { ThemeToggleButton};