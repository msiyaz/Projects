import React from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0g8oczd', 'template_u816ef7', form.current, '4aEgMrA__1BH89cmz')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

    return ( 
        <div className="contact">
            <div className="c-left">
                <span style={{color : darkMode? '#DDC3A5' : ''}}>Get in Touch</span>
                <span>Contact Me</span>
            </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thank you for considering me, I will get back to you as soon as possible!"}</span>
        </form>
        </div>
        </div>
     );
}
 
export default Contact;