import React, {useState, useEffect} from 'react'
import '../../index.css'
import './dad.css'
import '../../components/portfolio/portfolio.css'


const joke_api = "http://api.icndb.com/jokes/random?firstName=Aaryaman&lastName=Rattan";

const Dad = () => {
    const [joke, setJoke] = useState('');
    const generate = ()=>{
        fetch(joke_api)
    .then(response => response.json())
    .then(data => setJoke(data.value.joke))
    }
    useEffect(() =>{
        generate();
    }, [])
    
    
    return (
        <section>
         <div className="container portfolio__container">
             <h5 id= 'sec'>Stressed?</h5>
               <h2 id = "sec2">Generate a random joke.</h2>

            <article className= "portfolio__item">
             <div>
             <p >{joke}</p>
             <div className="portfolio__item-cta">
             <button className="btn btn-primary" onClick= {generate}> <h2>More? More.</h2></button>
             {/* <a href= "" className= "btn btn-primary"  onClick= {generate}>More? More.</a> */}
             </div>
            </div> 
            </article>
             </div>
             </section>
    )
}

export default Dad
