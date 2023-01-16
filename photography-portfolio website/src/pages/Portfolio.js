import React, { useContext } from 'react';
//Import images
import image1 from '../img/portfolio/11.png'
import image3 from '../img/portfolio/33.png'
import image5 from '../img/portfolio/55.png'
import image6 from '../img/portfolio/66.png'
//import Link 
import { Link } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion';
//import transitions
import { transition1 } from '../transitions';
//cursor context
import { CursorContext } from '../context/CursorContext';

const Portfolio = () => {
    const { mouseEnterHandler, mouseLeaverrHandler} = useContext(CursorContext)
 return (<motion.section 
        initial=    {{opacity:0}}
        animate=    {{opacity:1}}
        exit=       {{opacity:0}}
        transition= {transition1}
        className='section'>
    <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
            {/* Text */}
            <motion.div 
            initial=    {{opacity:0, y:'-50%'}}
            animate=    {{opacity:1, y:0}}
            exit=       {{opacity:0, y:'-50%'}}
            transition= {transition1}
            onMouseEnter = {mouseEnterHandler}
            onMouseLeave = {mouseLeaverrHandler}
            className='flex flex-col lg:items-start'>
                <h1 className='h1'>Portfolio</h1>
                <p className='mb-12 max-w-sm'>
                We cover a wide range of events, including weddings, concerts, corporate events, and family
                gatherings. <b>Make an inquiry</b> with us today to obtain the finest on your special day.
                </p>
                <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>Hire Us</Link>
            </motion.div>
             {/* Image Grid */}
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition1}
            className='grid grid-cols-2 lg:gap-2'>
                {/* Image */}
                <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                    <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={image1} alt=''/>
                </div>
                <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                    <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={image5} alt=''/>
                </div>
                <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                    <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={image6} alt=''/>
                </div>
                <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                    <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={image3} alt=''/>
                </div>
            </motion.div>
        </div>
    </div>
 </motion.section>

)};

export default Portfolio;
