import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
    return (
        <section id = "experience">
            <h5> My Skillset</h5>
            <h2>Skills and Work Experience</h2>
            <div className= "container experience__container">
                <div className= "experience__frontend">
                <h3>SkillSet</h3>
                <div className= "experience__content">
                    <article className= "experience__details">
                        <BsPatchCheckFill className= "experience__details-icons"></BsPatchCheckFill>
                        <div><h4>Java</h4>
                        <small className= "text-light">Intermediate+</small></div>
                    </article>
                    <article className= "experience__details">
                    <BsPatchCheckFill className= "experience__details-icons"></BsPatchCheckFill>
                        <div><h4>Python</h4>
                        <small className= "text-light">Intermediate+</small></div>
                    </article>
                    <article className= "experience__details">
                    <BsPatchCheckFill className= "experience__details-icons"></BsPatchCheckFill>
                        <div><h4>HTML, CSS</h4>
                        <small className= "text-light">Intermediate</small></div>
                    </article>
                    <article className= "experience__details">
                    <BsPatchCheckFill className= "experience__details-icons"></BsPatchCheckFill>
                        <div><h4>Django, React, SQLite3</h4>
                        <small className= "text-light">Basic</small></div>
                    </article>
                    <article className= "experience__details">
                    <BsPatchCheckFill className= "experience__details-icons"></BsPatchCheckFill>
                        <div><h4>C, C++</h4>
                        <small className= "text-light">Basic</small></div>
                    </article>
                    <article className= "experience__details">
                    <BsPatchCheckFill className= "experience__details-icons"></BsPatchCheckFill>
                        <div><h4>Git/GitHhub</h4>
                        <small className= "text-light">Comfortable</small></div>
                    </article>
                    
                </div>
                </div>


                {/* END FOR FRONTEND */}
                <div className= "experience__backend">
                <h3>Work Experience</h3>
                <div className= "experience__content">
                    <article className= "experience__details">
                    <BsPatchCheckFill className= "experience__details-icons"></BsPatchCheckFill>
                        <div><h4>Technical Interviewer</h4>
                        <small className= "text-light">Institute for Social Research</small></div>
                    </article>
                    <article className= "experience__details">
                    <BsPatchCheckFill className= "experience__details-icons"></BsPatchCheckFill>
                        <div><h4>Software Intern<br></br> (bootstrap)</h4>
                        <small className= "text-light">Aurion Pharmaceuticals</small></div>
                    </article>
                    <article className= "experience__details">
                    <BsPatchCheckFill className= "experience__details-icons"></BsPatchCheckFill>
                        <div><h4>Barista</h4>
                        <small className= "text-light">Tim Hortons</small></div>
                    </article>
                    <article className= "experience__details">
                    <BsPatchCheckFill className= "experience__details-icons"></BsPatchCheckFill>
                        <div><h4>Sales Intern</h4>
                        <small className= "text-light">GR Pharma</small></div>
                    </article>
                    
                    
                </div>

                </div>

            </div>
        </section>
    )
}

export default experience
