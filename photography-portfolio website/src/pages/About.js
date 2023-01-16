import React, { useContext } from 'react';
//import images
import Womanimg from '../img/about/woman2.png'
// import Link
import { Link } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion';
//import transitions
import { transition1 } from '../transitions';
//cursor context
import { CursorContext } from '../context/CursorContext';

const About = () => {
  const {mouseEnterHandler, mouseLeaverrHandler} = useContext(CursorContext)
  return <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section'>
    <div className='container mx-auto h-full relative'>
      {/* text and image wrapper*/}
      <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
        {/* Image */}
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition1}
        className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden mb-[50px]'>
          <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={Womanimg}
                alt=''
              />
        </motion.div>
        {/* text */}
        <motion.div 
        initial={{ opacity: 0, y: '-50%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '-50%' }}
        transition={transition1}
        onMouseEnter = {mouseEnterHandler}
        onMouseLeave = {mouseLeaverrHandler}
        className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
          <h1 className='h1'>
            About Us
          </h1> 
        <p className='mb-12 max-w-sm'>
        We are an innovative Photography and Videography Company based in St. John’s, Newfoundland 
        and Edmonton, Alberta designed to produce the best results driven from new fresh ideas,
        passion, creative skill sets and experience to bring the best out of 
        you 
        <br/>
        <br/>
        We push boundaries by not just thinking about your brand but 
        also your website and digital marketing for your social media.
        </p>
        <Link to={'/portfolio'} className='btn'>View Our Work</Link>
        </motion.div>
      </div>
    </div>
  </motion.section>;
};

export default About;
