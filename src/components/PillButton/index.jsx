function PillButton({ featured, flag, text, aria_label, handleClickAction }) {
    return (
        <>
            <button type="button" className={`relative inline-flex overflow-hidden rounded-full p-[2px] ${flag && 'pointer-events-none'} mb-4 w-2/3`} aria-label={aria_label} onClick={()=>{handleClickAction}}>
                {featured && (
                    <>
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span> 
                    </>
                )}
                 <span className={`inline-flex items-center justify-center w-full px-4 py-2 text-sm lg:text-md font-semibold text-green-800 bg-green-200 rounded-full cursor-pointer dark:bg-light-link uppercase dark:text-white/80 backdrop-blur-3xl whitespace-nowrap`}>{text}</span>
            </button>
       
        </>
    );
}
export { PillButton }