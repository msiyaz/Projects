import React, { useState } from 'react';
//import icons
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
//import link
import { Link } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion';

import { ImFacebook , ImInstagram } from 'react-icons/im'

//Menu Variants

const menuVariants = {
  hidden: {
    x: '100%'
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6,0.01,-0.05,0.9],
    },
  },
}
const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className='text-primary xl:hidden'>{/**  */}
      {/* Nav Open button */}
      <div className='text-3xl cursor-pointer' onClick={() => setOpenMenu(true)}>{/** */}
        <CgMenuRight />
      </div>
      <motion.div 
      variants={menuVariants}
      initial='hidden'
      animate= {openMenu ? 'show' : ''}
      className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'>{/** */}
        {/* Icons */}
        <div onClick={() => setOpenMenu(false)} className='text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer'> {/** */}
          <IoMdClose />
        </div>
        <div className='m-list'>
        <ul className='h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl'>{/** */}
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/portfolio'}>Portfolio</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
          <li className='flex gap-x-4'>{/**  */}
            <a href='https://www.facebook.com/skkynationmedia/' target='_blank' rel="noreferrer">
              <ImFacebook/>
            </a>
            <a href='https://www.instagram.com/skkynation/?igshid=bodvacx10w2a' target='_blank' rel="noreferrer">
              <ImInstagram />
            </a>
          </li>
        </ul>
        </div>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
