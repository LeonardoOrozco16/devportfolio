function CardCarousel({children}) {
    return (
        <div className="card-carousel mt-12 py-2 flex flex-row w-auto h-28 lg:h-auto lg:flex-wrap gap-4 lg:gap-6 items-center overflow-x-auto overscroll-x-contain scrollbar-hide">
            {children}
        </div>
    )
}
function CarouselItem({ children,nameItem}) {
    return (
        <div className={`carousel-item ${nameItem}  w-16 h-16 flex-none lg:opacity-50 transition-all lg:hover:opacity-100`}>
            {children}
        </div>
    )
}
export{CardCarousel,CarouselItem}