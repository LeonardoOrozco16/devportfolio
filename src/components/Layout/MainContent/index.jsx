function MainContent({children}) {
    return (
        <main className="w-full lg:w-2/3 z-10">
            {children}
        </main>
    );
}
export { MainContent };