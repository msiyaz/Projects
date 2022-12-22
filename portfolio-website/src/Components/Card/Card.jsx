import React from 'react';
import'./Card.css'
import { themeContext } from '../../Context';
import { useContext } from 'react';
function Card({emoji,heading,detail}) {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return ( 
        <div className="card">
            <img src={emoji} alt="" />
            <span style={{color : darkMode? '#DDC3A5' : ''}}>{heading}</span>
            <span>{detail}</span>
        </div>
     );
}

export default Card;