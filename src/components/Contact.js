import React, { useRef } from 'react';
import './Contact.css'
import Linkedin from '../assets/linkedin.svg'
import Github from '../assets/github.svg'
import Instagram from '../assets/instagram.svg'
import Facebook from '../assets/facebook.svg'
// import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();
    
    //     emailjs
    //     .sendForm("", "", form.current, "")
    //     .then((result) => {
    //         console.log('SUCCESS!', result.text);
    //         e.target.reset();
    //         alert('Email Sent!');
    //         },
    //         (error) => {
    //         console.log('FAILED...', error.text);
    //         },
    //     );
    // };

return (
    <section id = 'contact'>
        <div id = 'social'>
            
            <h1 className='socialTitle'>Socials</h1>
            <p className='socialDesc'>Here you can connect with me on my social media</p>
            

            <div className='socialImgs'>

                
                <a href='#'><img src = {Linkedin} alt = 'Social' className='socialImg'/></a>
                <a href='#'><img src = {Github} alt = 'Social' className='socialImg'/></a>
                

                
                <a href='#'><img src = {Instagram} alt = 'Social' className='socialImg'/></a>
                <a href='#'><img src = {Facebook} alt = 'Social' className='socialImg'/></a>
                

            </div>
        </div>

        <div id = 'contactPage'>
            
            <h1 id = 'contactTitle'>Contact</h1>
            <span className = 'contactDesc'>Feel free to contact me</span>

            
            <form className = 'contactForm' ref={form}>
            <input type = 'text' className = 'name' placeholder = 'Your Name' name = 'your_name'/>
            <input type = 'email' className = 'email' placeholder = 'Your Email' name = 'your_email'/>
            <textarea className = 'msg' name = 'message' rows= "5" placeholder = 'Your Message'></textarea>
            <button type = "submit" value="Send" className = 'submitBtn'>Submit</button>
            </form>
            
            
        </div>
    </section>
)
}

export default Contact