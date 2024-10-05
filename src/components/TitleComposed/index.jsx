function TitleComposed({ type, primaryWord, secondaryWord }) {
    const titles = {
        h1: <h1 className="text-4xl font-bold dark:text-dark-title text-light-title">{primaryWord} <span className="font-extralight">{secondaryWord}</span></h1>,
    }
    return(titles[type])
}
export{TitleComposed}