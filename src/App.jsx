import React from 'react'

import Header from './components/header/Header'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Nav from './components/nav/Nav'
import Dad from './components/dad/Dad'
import { useContext } from "react";

import { ThemeContext } from "./Theme";





const App = () => {

  // const[theme, setTheme] = useState('dark');
  // const toggleTheme = () =>{
  //   setTheme ((curr)=> (curr==='light'? 'dark': 'light'))

  // }
  const { theme } = useContext(ThemeContext);
    return (
      // <ThemeContext.Provider value={{theme, toggleTheme}}>
        <div className={`App ${theme}`}>
   
          <Header></Header>
          
          <Nav></Nav>
          <About></About>
          <Experience></Experience>
          <Portfolio></Portfolio>

          <Dad></Dad>
    
          <Contact></Contact>
          <Footer></Footer>
          {/* </ThemeContext.Provider> */}


        </div>
    );
}
export default App;
