import "./styles/SectionBlock.css";
function SectionBlock({ children, sectionName }) {
    return (<section id={sectionName} className="block-content w-full pt-[50px]">{children}</section>)
}
export { SectionBlock }