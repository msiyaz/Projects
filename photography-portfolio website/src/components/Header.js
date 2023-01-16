import React, { useContext } from 'react';
//Import Componets
import Socials from './Socials'
import logo from '../img/header/logo11.svg'
import MobileNav from './MobileNav'
//import Link
import { Link } from 'react-router-dom';
//cursor context
import { CursorContext } from '../context/CursorContext';
//import motion
import { motion } from 'framer-motion';

const Header = () => {
  const {mouseEnterHandler, mouseLeaverrHandler} = useContext(CursorContext)
  return (<motion.header 
    onMouseEnter = {mouseEnterHandler}
    onMouseLeave = {mouseLeaverrHandler}
  className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:px-[140px] flex items-cente'>
     <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>{/*'*/}
      {/* Logo */}
      <Link to={'/'} >
        <img  src={logo} alt=''/>      
      </Link>
      {/* nav -starts of hidden */}
      <nav className='hidden xl:flex gap-x-12 font-semibold'>{/**/}
        <Link className="text-[#696c6d] hover:text-primary transition" to={'/'} >Home</Link>{/**  */}
        <Link className="text-[#696c6d] hover:text-primary transition" to={'/portfolio'} >Portfolio</Link>{/** */}
        <Link className="text-[#696c6d] hover:text-primary transition" to={'/about'} >About</Link>{/** */}
        <Link className="text-[#696c6d] hover:text-primary transition" to={'/contact'}>Contact</Link>{/** */}
    
      </nav>
      </div>
      {/* socials */}
      <Socials />
      {/* Mobile Nav */}
      <MobileNav />
     </motion.header>);
};

export default Header;
