import React from 'react'
import './portfolio.css'
import TICTACTOE from '../../assets/tictactoe.png'
import TICTACTO2 from '../../assets/tictacto2.png'
import SOCIAL from '../../assets/social.png'
import SOCIAL2 from '../../assets/social2.png'




const portfolio = () => {
    return (
        <section id= 'portfolio'>
               <h5>My recent work</h5>
               <h2>Projects</h2>
               
               <div className="container portfolio__container">
                    <article className="portfolio__item">
                        <div className="portfolio__item-image">

                            <img src = {SOCIAL} id= "image"></img>
                            <img src = {SOCIAL2} id= "image"></img>

                        </div>
                        <h3>Social Media Website using Django</h3>
                        <div className="portfolio__item-cta">
                        <a href= "https://github.com/Aaryaman2001/social-media-app.-" className= "btn btn-primary" target = "_blank">Github</a>
                       
                        </div>

                    </article>
                    <article className="portfolio__item">
                        <div className="portfolio__item-image">

                            <img src = {TICTACTOE} id= "image"></img>
                            <img src = {TICTACTO2} id= "image"></img>
                            
                        </div>
                        <h3>TicTacToe using Artificial Intelligence and PyGame</h3>
                        <div className="portfolio__item-cta">
                        <a href= "https://github.com/Aaryaman2001/TicTacToe" className= "btn btn-primary" target = "_blank">Github</a>
                     
                        </div>

                    </article>
                  








       
               </div>
            
        </section>
    )
}

export default portfolio
