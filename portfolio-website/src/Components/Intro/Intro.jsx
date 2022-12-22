import React from 'react';
import "./Intro.css";
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-scroll';

const Intro = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = { duration: 2, type: "spring" };
    return ( 
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{color : darkMode? '#DDC3A5':''}}>Hey! I Am </span>
                    <span > Munyaradzi Siyawamwaya</span>
                    <span>Computer science graduate with progressive experience writing code and designing solutions.Adept at working effectively in fast-paced, deadline-driven settings that demand strong organizational and analytical skills.</span>
                </div>
                <Link to="contact" spy={true} smooth={true}>
                    <button className="button i-button">Hire Me</button>
                </Link>
                <div className="i-icons">
                    <a href="https://github.com/msiyaz/Projects"><img src={Github} alt="" /></a>
                    <a href="https://www.linkedin.com/in/munyaradzi-siyawamwaya-333679168/"><img src={Linkedin} alt="" /></a>
                    <a href="https://www.instagram.com/munya.mp/?utm_source=ig_embed"><img src={Instagram} alt="" /></a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                initial = {{left : '-36%'}}
                whileInView = {{left : '-24%'}}
                transition = {transition}
                src={glassesimoji} alt="" />
                <motion.div 
                initial = {{top : '-4%' , left: '74%'}}
                whileInView = {{left : '68%'}}
                transition = {transition}
                style={{top: '-4%',left:'68%'}}>
                    <FloatingDiv image={crown} txt1='Software' txt2='Developer'/>
                </motion.div>
                <motion.div 
                initial = {{top : '18rem' , left : '-5rem'}}
                whileInView = {{left : '0rem'}}
                transition = {transition}
                style={{top: '18rem', left:'0rem'}}>
                    <FloatingDiv image={thumbup} txt1='Hard' txt2='Working'/>
                </motion.div>
            </div>
        </div>
     );
}
export default Intro;


