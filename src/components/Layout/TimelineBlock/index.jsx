import "./styles/TimelineBlock.css"
function TimelineBlock({ children }) {
    return (
        <article className="timeline-block w-full py-12">
            {children}
        </article>
    );
}
function TimelineItem({children}) {
    return (
        <div className="timeline-block--item"><span className="ballMark"></span>{children}</div>
    );
}

function TimelineHeading({children}) {
    return (<div className="timeline_item--heading w-full">{children}</div>)
}
function TimelineDescription({ children }) {
    return (<div className="timeline_item--description w-full">{children}</div>);
}

TimelineItem.Heading = TimelineHeading;
TimelineItem.Description = TimelineDescription;
export {TimelineBlock,TimelineItem}