import React from 'react'
  function useLocalStorage() {
    const storagedThemeName = 'isActiveDarkTheme';
    const [activeDarkTheme, setActiveDarkTheme] = React.useState(() => {
      let isStoraged = JSON.parse(localStorage.getItem(storagedThemeName));
      if (isStoraged !== null) {
        return isStoraged;
      }
      return false;
    });
    const loadTheme = (trigg) => {
        document.body.classList.toggle('dark',JSON.parse(trigg))
    }
    React.useEffect(() => {
      loadTheme(activeDarkTheme)
      const sincroniaTema = (event) => {
      if (event.storageArea === localStorage && event.key === storagedThemeName) {
        setActiveDarkTheme(!activeDarkTheme)
      }
    };
    window.addEventListener('storage', sincroniaTema);
    return () => {
      window.removeEventListener('storage', sincroniaTema);
    }
  }, [activeDarkTheme])
    
  const toggleTheme = () => {
    setActiveDarkTheme(!activeDarkTheme);
    localStorage.setItem(storagedThemeName, JSON.stringify(!activeDarkTheme))
     
  };

  return {activeDarkTheme, loadTheme ,toggleTheme};
}
export { useLocalStorage };
