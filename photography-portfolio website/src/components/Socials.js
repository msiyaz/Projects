import React from 'react';
//import icons

import { ImFacebook , ImInstagram } from 'react-icons/im'

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li>
        <a href='https://www.facebook.com/skkynationmedia/' target='_blank' rel="noreferrer">
          <ImFacebook/>
        </a>
      </li>
      <li>
        <a href='https://www.instagram.com/skkynation/?igshid=bodvacx10w2a' target='_blank' rel="noreferrer">
          <ImInstagram />
        </a>
      </li>
    </ul>
  </div>;
};

export default Socials;
