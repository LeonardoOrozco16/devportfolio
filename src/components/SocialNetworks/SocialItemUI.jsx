function SocialItemUI(props) {
    return (<>
        <li><a href={`${props.url}`} className={`${props.name}-icon`} aria-label={`mi ${props.name}`} target="_blank">{props.children}</a></li>
    </>)
}
export { SocialItemUI };