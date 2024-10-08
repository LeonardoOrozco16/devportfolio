import React from "react";
import { GlobalContext } from "@hooks/GlobalContext";
import { NavItem } from "./NavItem"
function NavBar() {
    const { navigation } = React.useContext(GlobalContext);
    return (<nav className="glass sticky top-2 z-50 p-2 hidden lg:flex flex-row items-center justify-center gap-8 mb-[20px]">
        {navigation.map((item) => (
                <NavItem key={item.name} itemName={item.name} itemURI={item.url} itemIcon={item.icon} />
            ))}
    </nav>)
}
export {NavBar}