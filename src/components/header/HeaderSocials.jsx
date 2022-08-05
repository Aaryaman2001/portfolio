import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'

import {SiLeetcode} from 'react-icons/si'





const HeaderSocials = () => {
    return (
        <div className= "header__socials">
            <a href = "https://www.linkedin.com/in/aaryaman-rattan-18160521b/" target= "_blank"><BsLinkedin/> </a>
            <a href = "https://github.com/Aaryaman2001" target= "_blank"> <FaGithubSquare/></a>
            <a href = "https://leetcode.com/Aarya_R/" target= "_blank"><SiLeetcode/></a>



        </div>
    )
}

export default HeaderSocials
