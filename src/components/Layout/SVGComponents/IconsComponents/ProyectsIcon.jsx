function ProyectsIcon({size,color}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width = {`${size}`} height = {`${size}`}  viewBox="0 0 24 24"> <g fill="none" className={`stroke-current ${color}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="black"><path d="M14 2h-4c-3.28 0-4.919 0-6.081.814a4.5 4.5 0 0 0-1.105 1.105C2 5.08 2 6.72 2 10s0 4.919.814 6.081a4.5 4.5 0 0 0 1.105 1.105C5.08 18 6.72 18 10 18h4c3.28 0 4.919 0 6.081-.814a4.5 4.5 0 0 0 1.105-1.105C22 14.92 22 13.28 22 10s0-4.919-.814-6.081a4.5 4.5 0 0 0-1.105-1.105C18.92 2 17.28 2 14 2" /><path d="m16 8l1.227 1.057c.515.445.773.667.773.943s-.258.498-.773.943L16 12M8 8L6.773 9.057C6.258 9.502 6 9.724 6 10s.258.498.773.943L8 12m5-5l-2 6m3.656 9l-.42-.419a3.1 3.1 0 0 1-.58-3.581M9 22l.42-.419A3.1 3.1 0 0 0 10 18m-3 4h10" /></g></svg>
    );
}
export {ProyectsIcon}