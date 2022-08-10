// import React, {useState, useEffect} from 'react'
// import '../../index.css'
// import './dad.css'
// import '../../components/portfolio/portfolio.css'





// const joke_api = "https://excuser.herokuapp.com/v1/excuse";

// // "https://excuser.herokuapp.com/v1/excuse";


// const Dad = () => {
//     const [joke, setJoke] = useState('');
//     const generate = ()=>{
//         fetch(joke_api)
//     .then(response => response.json())
//     .then(data => setJoke(data.value.joke))
//     }
//     useEffect(() =>{
//         generate();
//     }, [])
    // function counter(){
    //     const x = document.getElementById("uhm");
    //     count++;
    //     x.innerHTML = count;
    //     console.log("here");

//     // }


  
    
    
//     return (
//         <section>
//          <div className="container portfolio__container">
//              <h5 id= 'sec'>Running out of excuses?</h5>
//                <h2 id = "sec2">Generate a random excuse to get you going.</h2>

//             <article className= "portfolio__item">
//              <div>
//              <p >{joke}</p>
//              <div className="portfolio__item-cta">
//              <button className="btn btn-primary" onclick= {generate}> <h2> More? Always.</h2></button>
//              <br/>
//              {/* <h5>You have <span>0</span> excuses in your arsenal.</h5> */}
             
             
//              {/* <a href= "" className= "btn btn-primary"  onClick= {generate}>More? More.</a> */}
//              </div>
//             </div> 
//             <h5>You have <span id ="uhm">0</span> excuses in your arsenal!</h5>
//             </article>
            
//              </div>
//              </section>
//     )
// }

// export default Dad


// class Dad extends React.Component{
//     state = {advice: ''}
//     componentDidMount(){

        
//     }

//     fetchAdvice= () => {
//         // axios.get('https://api.adviceslip.com/advice');
//         //    .then(data => {
//         //     console.log(data)
//         //    })
//         //    .catch(error => {
//         //       console.log(error.response.data.error)
//         //    })
//         try {
//             let res = axios.get('https://api.adviceslip.com/advice');
//             const advice = res.data.slip;
//             this.setState({advice})
        
//             // Work with the response...
//         } catch (err) {
//             if (err.response) {
//                 // The client was given an error response (5xx, 4xx)
//             } else if (err.request) {
//                 // The client never received a response, and the request was never left
//                 console.log(err.request);
//             } else {
//             }
//         }
//     }
    
//     render(){
//         return(
//             <div>{this.state.advice}</div>
//         );
//     }
// }
// export default Dad;

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
             <div className="portfolio__item-cta">
             <button className="btn btn-primary" onClick= {generate}> <h2 >More? More.</h2></button>

             
             {/* <a href= "" className= "btn btn-primary"  onClick= {generate}>More? More.</a> */}
             </div>
             <h5>Yay, you have <span id= "uhm">{count}</span> excuse(s) in your arsenal.</h5>
            </div> 
            </article>
             </div>
             </section>
    )
}

export default Dad