function TitleComposed({type, primaryWord, secondaryWord,decorated,uppercase}) {
    const titles = {
        h1: <h1 className={`relative text-4xl font-bold dark:text-dark-title text-light-title pb-2 ${decorated && "after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-gradient-to-r from-light-title to-transparent dark:after:bg-gradient-to-r dark:from-light-detail dark:to-transparent after:top-[100%] after:left-0"} ${uppercase && "uppercase"}`}>{primaryWord} <span className="font-extralight">{secondaryWord}</span></h1>,
        h2: <h2 className={`relative text-4xl font-bold dark:text-dark-title text-light-title pb-2  ${decorated && "after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-gradient-to-r from-light-title to-transparent dark:after:bg-gradient-to-r dark:from-light-detail dark:to-transparent after:top-[100%] after:left-0"} ${uppercase && "uppercase"}`}>{primaryWord} <span className="font-extralight">{secondaryWord}</span></h2>,
        h3: <h3 className={`relative text-4xl font-bold dark:text-dark-title text-light-title pb-2  ${decorated && "after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-gradient-to-r from-light-title to-transparent dark:after:bg-gradient-to-r dark:from-light-detail dark:to-transparent after:top-[100%] after:left-0"} ${uppercase && "uppercase"}`}>{primaryWord} <span className="font-extralight">{secondaryWord}</span></h3>,
    }
    return(titles[type])
}
export{TitleComposed}