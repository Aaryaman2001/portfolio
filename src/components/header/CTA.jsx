import React from 'react'
import CV from '../../assets/cv.pdf'
import SetTheme from '../../SetTheme'

const CTA = () => {
    return (
        <div className="cta">
            <a href= {CV} download className= "btn">Download my CV </a>
            <a href = "#contact" className= 'btn btn-primary'>Let's Talk </a>
            <SetTheme></SetTheme>

            
        </div>
    )
}

export default CTA
