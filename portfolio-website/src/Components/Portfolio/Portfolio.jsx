import React from 'react';
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";
import Converter from "../../img/covertor.png"
import Rock from "../../img/rock.png";
import Blog from "../../img/blog.png";
import Game from "../../img/game.jpg"
import Corner from "../../img/corner-detection.jpg"
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return ( 
        <div className="portfolio">
            {/* Headings */}
            <span style={{color : darkMode? '#DDC3A5' : ''}}>Recent Projects</span>
            <span>Portfolio</span>

            {/* Swiper */}

            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider">
                <SwiperSlide>
                    <a href="https://github.com/msiyaz/Projects/tree/main/Game-of-Life"><img src={Game} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://github.com/msiyaz/Projects/tree/main/Corner%20Detection"><img src={Corner} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://github.com/msiyaz/Projects/tree/main/Convertor"><img src={Converter} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://github.com/msiyaz/Projects/tree/main/Rock%20Paper%20Scissors"><img src={Rock} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://github.com/msiyaz/Projects/tree/main/Blog-Post"><img src={Blog} alt="" /></a>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
}
 
export default Portfolio;