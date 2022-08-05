import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {FaWhatsappSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'


const footer = () => {
    return (
        <footer>
            <a href= "#" className= 'footer__logo'>Aarya</a>
            <ul className= 'permalinks'>
                <li><a href ="#">Home</a></li>
                <li><a href ="#about">About</a></li>
                <li><a href ="#experience">Skills</a></li>
                <li><a href ="#portfolio">Portfolio</a></li>
                <li><a href ="#contact">Contact</a></li>
            </ul>
            <div className= 'footer__socials'>
                <a href = "https://www.facebook.com/aaryamanrattan/" target = "_blank"><AiFillFacebook/></a>
                <a href = "https://www.linkedin.com/in/aaryaman-rattan-18160521b/" target= "_blank"><BsLinkedin/> </a>
            <a href = "https://github.com/Aaryaman2001" target= "_blank"> <FaGithubSquare/></a>
                <a href = "https://www.instagram.com/aaryeahman/" target = "_blank"><FaInstagramSquare></FaInstagramSquare></a>



            </div>
            <div className="footer_copyright">
                <small>&copy; Aaryaman Rattan. All rights reserved.</small>
            </div>


        </footer>
    )
}

export default footer
