import { useState, useEffect} from "react"

function App() {

  const [theme, setTheme] =useState(() => {
    const userTheme = localStorage.getItem("themeMode");
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if(userTheme === 'dark' || (!(userTheme in localStorage) && systemTheme)){
      return 'dark'
    }
    return 'light'
  });

  
  useEffect(() => {
    if(theme === 'dark'){
      document.querySelector('html').classList.add('dark')
      localStorage.setItem("themeMode", "dark")
    }else {
      document.querySelector('html').classList.remove('dark')
      localStorage.setItem("themeMode", "light")
    }
  }, [theme])
  

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }


  return (
    <div className="bg-slate-200 h-screen flex justify-center items-center dark:bg-slate-800">
      <button className="bg-slate-500 uppercase rounded p-2 font-semibold text-sky-300 hover:bg-slate-400
       dark:bg-slate-900 dark:hover:bg-slate-950 dark:text-white"
       onClick={handleChangeTheme}>
        Change Theme
      </button>
    </div>
  )
}

export default App
