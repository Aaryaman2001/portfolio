
import React, {useState, useEffect} from 'react'
import '../../index.css'
import './dad.css'
import '../../components/portfolio/portfolio.css'



const joke_api = "https://excuser.herokuapp.com/v1/excuse";
let count =0;


const Dad = () => {
    const [joke, setJoke] = useState('');
    const generate = ()=>{
        fetch(joke_api)
    .then(response => response.json())

    .then(data => setJoke(data[0].excuse))
    count++;
}
    useEffect(() =>{
        generate();
    }, [])



    
    
    return (
        <section>
         <div className="container portfolio__container">

             <h5 id= 'sec'>Running out of excuses?</h5>
               <h2 id = "sec2">Generate a random excuse to get you going.</h2>


            <article className= "portfolio__item">
             <div>
             <p >{joke}</p>

             <button className="btn btn-primary" onClick= {generate}> <h2 >More? More.</h2></button>

             
             {/* <a href= "" className= "btn btn-primary"  onClick= {generate}>More? More.</a> */}
             </div>
             <h5>Yay, you have <span id= "uhm">{count}</span> excuse(s) in your arsenal.</h5>


           
            </article>
        </div>
        </section>
    )
}


export default Dad



