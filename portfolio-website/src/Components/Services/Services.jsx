import React from 'react';
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Resume2.pdf'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const Services = () => {

    const transition = { duration: 2, type: "spring" };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return ( 
        <div className="services">
            {/* Left side */}
            <div className="awesome">
                <span style={{color : darkMode? '#DDC3A5': ''}}>My Awesome</span>
                <span>ToolBox</span>
                <span>I'm an adventurous person who enjoys using software and technology to solve problems.</span>
                <a href={Resume} download>
                <button className='button s-button'>Download CV</button>
                </a>
                
            </div>

            {/* Right side */}
            <div className="cards">
                {/* First Card */}
                <motion.div 
                initial={{ left: "25rem" }}
                whileInView={{ left: "14rem" }}
                transition={transition}
                style={{left: '14rem'}}>
                    <Card
                    emoji = {HeartEmoji}
                    heading = {'Front-End Development'}
                    detail = {'React, HTML, CSS3, Javascript'}
                    />
                </motion.div>
                {/* Second Card */}
                <motion.div 
                initial={{ left: "-11rem", top: "12rem" }}
                whileInView={{ left: "-4rem" }}
                transition={transition}
                style={{top: '12rem', left:'-4rem'}}>
                    <Card
                    emoji = {Glasses}
                    heading = {'Back-End Development'}
                    detail = {'Java, Python, TypeScript, MongoDB, MySQL, C/C++'}
                    />
                </motion.div>
                {/* Third Card */}
                <motion.div 
                initial={{ top: "19rem", left: "25rem" }}
                whileInView={{ left: "12rem" }}
                transition={transition}
                style={{top: '19rem', left: '12rem'}}>
                    <Card
                    emoji={Humble}
                    heading={"Ready to Work"}
                    detail= {'I adore programming code and creating programmes and services that help people.'}
                    />
                </motion.div>
            </div>
        </div>
     );
}

export default Services;