import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FaUserAstronaut} from 'react-icons/fa'
import {FaBook} from 'react-icons/fa'
import {BiPhoneCall} from 'react-icons/bi'
import {GiPirateHat} from 'react-icons/gi'
import {useState} from 'react'



const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav> 
            <a href="#" onClick= {() => setActiveNav('#')} className = {activeNav==="#"? 'active': ""}><FaHome/></a>
            <a href="#about" onClick= {() => setActiveNav('#about')} className = {activeNav==="#about"? 'active': ""}><FaUserAstronaut/></a>
            <a href="#experience" onClick= {() => setActiveNav('#experience')} className = {activeNav==="#experience"? 'active': ""}><FaBook/></a>
            <a href="#portfolio" onClick= {() => setActiveNav('#portfolio')} className = {activeNav==="#portfolio"? 'active': ""}><GiPirateHat/></a>
            <a href="#contact" onClick= {() => setActiveNav('#contact')} className = {activeNav==="#contact"? 'active': ""}><BiPhoneCall/></a>

        </nav>
    )
}

export default Nav
