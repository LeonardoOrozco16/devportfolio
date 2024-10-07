import React from "react";
import { GlobalContext } from "@hooks/GlobalContext";
import { IconsComponents } from "@structure/SVGComponents/IconsComponents";
import { SocialItemUI } from "./SocialItemUI";
import "./styles/SocialNetworks.css";
function SocialNetworks() {
    const { socialNetworks } = React.useContext(GlobalContext);
    
    return (
        <ul className="socials">
            {socialNetworks.map((network) => (
                    <SocialItemUI
                        key={network.name}
                        url={network.url}
                        name={network.name}
                    >
                        <IconsComponents  size={"3em"} type={network.name} />
                    </SocialItemUI>
            ))}
        </ul>
    );
}
export { SocialNetworks };