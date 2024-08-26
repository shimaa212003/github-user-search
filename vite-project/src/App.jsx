
import './App.css'
import { createContext } from 'react'
import {useState,useEffect} from "react"
import Header from "./components/Header/Header"
import SearchBar from "./components/SearchBar/SearchBar"
import UserData from "./components/UserCard/UserCard"
 
export  const ThemeContext = createContext(null)
 function App() {

//   const isDarkMode= JSON.parse(localStorage.getItem("dark-mode"))
  const [ darkMode, setDarkMode ] = useState("light" ,"dark");
  const [ userData, setUserData ] = useState({});

  function changeDarkMode() {
      setDarkMode(prevDarkMode => !prevDarkMode);
  };


  function saveUserData(user) {
      setUserData(user);
  };

  useEffect(() => {
      localStorage.setItem("dark-mode", darkMode);
  }, [darkMode]);

  return (
   
      <div className={`App ${darkMode ? "dark" : "light"}`} >
         <ThemeContext.Provider value={{darkMode, changeDarkMode}}>
          <main className="container">
              <Header  />
              <SearchBar saveUserData={saveUserData} />
              <UserData user={userData} />
          </main>
          </ThemeContext.Provider>
      </div>


  
  )
}
export default App;

