import React from 'react'
import './about.css'
import IMAGE2 from '../../assets/image2.jpg'
import {BsAwardFill} from 'react-icons/bs'
import {IoMdSchool} from 'react-icons/io'
import {GiBookmark} from 'react-icons/gi'

const about = () => {
    return (
        <section id= 'about'>
            <h5>Get To Know </h5>
            <h2>About Me</h2>
            <br></br><br></br><br></br>
            <div className= "container about__container"> 
              
                <div className="about__me">
                    <div className= 'about__me-image'>
                        <img src={IMAGE2} id = 'change' alt= "About Image">

                        </img>

                
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                    <article className='about__card'>
                        <IoMdSchool className= 'about__icon'></IoMdSchool>
                            <h5> Schooling</h5>
                            <small> TMU<br></br>(Formerly Ryerson) </small>
                        </article>
                       
                        <article className='about__card'>
                        <BsAwardFill className= 'about__icon'></BsAwardFill>
                            <h5>Faculty</h5>
                            <small><ul><li>Major: Computer Science</li> <li>Minor: Philosophy</li></ul></small>
                        </article>
                        
                        <article className='about__card'>
                        <GiBookmark className= 'about__icon'></GiBookmark>
                            <h5> GPA</h5>
                            <small> 3.7/4.33<br></br>(Dean's List)</small>
                        </article>
                        
                        </div>
                        <br></br>
                        <p>Hello, human; I hope you got to pet a cute doggo today. <br></br><br></br> I am a student at Toronto Metropolitan University, and here is a website made with tears and sweat just so you could find it xD. <br></br><br></br>
                            I like playing guitar(Yes, I could play the entire solo for Comfortably Numb), philosophy and well, coding. I am new to the corporate side of this field and any recommendations would take me a long way, so please reach out. <br></br>
                            <br></br>Have a wonderful day :)
                        </p>
                        <br></br>
                        <a href ="#contact" className= 'btn btn-primary'> Reach out</a>
                    
                </div>
            </div>
      
        </section>
    )
}

export default about
