import React, { useContext } from 'react';
//import images
import WomanImg from '../img/home/IMG_0028.png'
//Import link 
import { Link } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion';
//import transitions
import { transition1 } from '../transitions';
//cusor context
import { CursorContext } from '../context/CursorContext';

const Home = () => {
  const { mouseEnterHandler, mouseLeaverrHandler } = useContext(CursorContext)
  return( 
  <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={transition1}
  className='section'>
    <div className='container mx-auto h-full relative'>
      {/* Text and img wrapper */}
      <div className='flex flex-col justify-center'>
        {/* text */}
        <motion.div 
        initial=    {{opacity: 0 ,y: '-50%' }} 
        animate=    {{opacity: 1, y: 0 }}
        exit=       {{opacity: 0, y:'-50%' }}
        transition={transition1}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaverrHandler}
        className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'>
          <h1 className='h1'>
            Photogragher <br /> & Film Maker
          </h1>
          <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>
            Edmonton and St John's, CA</p>
            <Link to={'/contact'} className='btn mb-[30px]'>Hire Us</Link>
           
        </motion.div>
        {/* Image */}
        <div className= 'flex justify-end max-h-96 lg:max-h-max'>{/* '' */}
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition1}
          className= 'relative lg:-right-40 overflow-hidden mb-[-60px]'> {/*  */}
          
            <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={WomanImg}
                alt=''
              />
          </motion.div>
        </div>
      </div>
    </div>
  </motion.div>
)};

export default Home;
