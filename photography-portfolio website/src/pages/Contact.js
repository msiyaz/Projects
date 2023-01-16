import React, { useContext, useState } from 'react';
//Import image
import woman from '../img/contact/11.png';
//Import motion
import { motion } from 'framer-motion';
//import transitions
import { transition1 } from '../transitions';
//cursor context
import { CursorContext } from '../context/CursorContext';
//import emailjs
import emailjs from '@emailjs/browser'
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_1xm6dvn', 'template_1vpmmnd', form.current, 'KACmQ19f0JxBwClG-')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  const {mouseEnterHandler, mouseLeaverrHandler} =useContext(CursorContext)
  return (
  <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={transition1}
    className='section bg-white'>
    <div className='container mx-auto h-full'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
        {/* BG */}
        <div className='hidden lg:flex absolute bottom-0 left-0 right-0 top-72 -z-10'></div>
        {/* Text and Form */}
        <motion.div
         initial={{ opacity: 0, y: '-50%' }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: '-50%' }}
         onMouseEnter = {mouseEnterHandler}
          onMouseLeave = {mouseLeaverrHandler}
         transition={transition1}
        className='lg:flex-1 lg:pt-32 px-4'> 
          <h1 className='h1'>Contact Us</h1>
          <p className='mb-12'>We'd be delighted to hear your ideas.</p>
          {/* form */}
          <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-y-4'>
            <div className='flex gap-x-10'>
              <input name="user_name" className='outline-none border-b border-b-primary h-[60px] 
              bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
              type='text' placeholder='Your Name'/>
              <input name="user_email" className='outline-none border-b border-b-primary h-[60px] 
              bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
              type='text' placeholder='Your Email Address'/>
            </div>
              <input name="message" className='outline-none border-b border-b-primary h-[60px] 
              bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
              type='text' placeholder='Your Message'/>
              <input type='submit' className='btn mb-[30px] mx-auto lg:mx-0 self-start' value= 'Send It'/>
              <span>{done && "Thank you "}</span>
          </form>
        </motion.div>
        {/* image */}
        <div className='lg:flex-1 mb-[45px]'> 
        <motion.img
              whileHover={{ scale: 1.1 }}
              transition={transition1}
              src={woman}
              alt=''
              />
        </div>
      </div>
    </div>
  </motion.section>
)};

export default Contact;
