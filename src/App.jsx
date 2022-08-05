import React from 'react'

import Header from './components/header/Header'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Nav from './components/nav/Nav'




const App = () => {
    return (
        <div>
          
          <Header></Header>
          <Nav></Nav>
          <About></About>
          <Experience></Experience>
          <Portfolio></Portfolio>
          <Contact></Contact>
          <Footer></Footer>

        </div>
    )
}
export default App
