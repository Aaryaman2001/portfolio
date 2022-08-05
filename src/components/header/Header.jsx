import React from 'react'
import './header.css'
import CTA from './CTA'
import IMAGE3 from '../../assets/image3.png'
import HeaderSocials from './HeaderSocials'
import Title from './Title'
import './title.css'




const header = () => {
    return (
       <header>
           <div text-align = 'center' className="container header__container">
               <h2 class = 'h2'>Hiya, I am</h2>
           
           {/* <h1>Aaryaman Rattan</h1> */}
           <Title></Title>
           <h2 class= "h2">A Software Developer(flex? barely).</h2>
           


           
           <CTA></CTA>
           <HeaderSocials/>
           <div className="me">
                <img src = {IMAGE3} alt = ""/>
           </div>
           <a href = "#contact" className= "scroll__down">Scroll Down</a>

           
           
           </div>
       </header>
    )
}

export default header
