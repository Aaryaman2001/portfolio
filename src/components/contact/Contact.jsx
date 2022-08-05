import React from 'react'
import './contact.css'
import {MdMarkEmailUnread} from 'react-icons/md'
import {FaWhatsappSquare} from 'react-icons/fa'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import {RiMessengerLine} from 'react-icons/ri'
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ilvl40a', 'template_8c7r6x1', form.current, 'idJagCnZFenq7FvKh')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <section id= 'contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className= "contact__option">
                        <MdMarkEmailUnread className="contact__option-icon"></MdMarkEmailUnread>
                        <h4>Email</h4>
                        <h5>rattanaaryaman2001@gmail.com</h5>
                        <a href="mailto:rattanaaryaman2001@gmail.com" target= "_blank">Send a Message</a>
                    </article>
                    <article className= "contact__option">
                        <FaWhatsappSquare className="contact__option-icon"></FaWhatsappSquare>
                        <h4>WhatsApp</h4>
                        <h5>+1 (xxx) xxx-xxxx</h5>
                        <a href="https://api.whatsapp.com/send?phone=+14379729154" target= "_blank">Send a Message</a>
                    </article>
                    <article className= "contact__option">
                        <RiMessengerLine className="contact__option-icon"></RiMessengerLine>
                        <h4>Messenger</h4>
                        <h5>Aaryaman Rattan</h5>
                        <a href="https://m.me/aaryamanrattan" target= "_blank">Send a Message</a>
                    </article>
                </div>
                <form ref = {form} onSubmit= {sendEmail}>
                    <input type="text" name = 'name' placeholder="Your Full Name" required/>
                    <input type = "email" name = "email" placeholder= "Your Email" required/>
                    <textarea name = "message" rows = "7" placeholder= "Type in your message, click on the submit button to send." required/>
                    <button type= "submit" className= "btn btn-primary">Send Your Message</button>
                </form>

            </div>
        </section>
    )
}

export default Contact
