import React from "react";
import { ThemeToggleButton } from "@structure/ThemeToggleButton";
import { ProfileAside } from "@structure/ProfileAside";
import { MainContent } from "@structure/MainContent";
import { AvatarLogo } from "@components/AvatarLogo";
import { TitleComposed } from "@components/TitleComposed";
import { SocialNetworks } from "@components/SocialNetworks";
import { PillButton } from "@components/PillButton";
// Contesto Global
import { GlobalContext } from "@hooks/GlobalContext";
function AppUI() {
    const {handleMouseMove,cursorPosition} = React.useContext(GlobalContext);
    return (
        <main id="main-content" onMouseMove={(event) => {
            handleMouseMove(event);
        }} className="relative max-w-[1440px] flex flex-col lg:flex-row  gap-4 py-[100px] px-4">
            <div id="glowCursor" className="absolute w-[200px] h-[200px] rouded-full dark:bg-light-detail bg-dark-detail rounded-full opacity-40 blur-xl" style={{ top: cursorPosition.y, left: cursorPosition.x, transform: 'translate(-50%,-50%)'}} ></div>
            <ThemeToggleButton estilos={"absolute top-2 right-2 p-2 rounded-full shadow-xl bg-light-bg dark:bg-dark-bg"} iconLight={"text-light-detail"} iconDark={"text-dark-bg"} />
            <ProfileAside>
                <AvatarLogo />
                <TitleComposed type={"h1"} primaryWord={"Leonardo"} secondaryWord={"Orozco"} />
                <h2 className="font-thin dark:text-dark-title text-light-title">Frontend Developer</h2>
                <SocialNetworks />
                <PillButton featured={true} flag={true} aria_label={"Open to Work"} text={"Disponible para trabajar"} />
                <PillButton aria_label={"Dowload CV"} text={"Descargar CV"} />
            </ProfileAside>
            <MainContent>
                <h1>Content</h1>
            </MainContent>
        </main>
    );
}
export { AppUI };
