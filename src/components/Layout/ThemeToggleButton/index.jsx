import React from "react";
import { GlobalContext } from "@hooks/GlobalContext";
import { LightIcon } from "../SVGComponents/IconsComponents/LightIcon";
import { DarkIcon } from "../SVGComponents/IconsComponents/DarkIcon";
function ThemeToggleButton({estilos,iconLight,iconDark}) {
    const {activeDarkTheme,toggleTheme} = React.useContext(GlobalContext);
    return (<>
        <button className={estilos} type="button" onClick={(event) => {
            event.preventDefault();
            toggleTheme()
        }} aria-label="Theme toggle">
            {!activeDarkTheme && (<DarkIcon size={"2em"} color={iconDark} />)}
            {activeDarkTheme && (<LightIcon size={"2em"} color={iconLight} />)}
        </button>
    </>);
}
export { ThemeToggleButton};