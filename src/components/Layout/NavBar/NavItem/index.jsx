import { IconsComponents } from "@structure/SVGComponents/IconsComponents";
import "./styles/NavItem.css";
function NavItem({ itemName, itemURI, itemIcon }) {
    return (
        <a className="nav-item hover:text-light-link" href={itemURI} aria-label={itemName} target="_self">
            <IconsComponents  size={"2.5em"} type={itemIcon} color={"text-light-title dark:text-light-title hover:text-light-link"}  />
            {itemName}
        </a>)
}
export {NavItem}