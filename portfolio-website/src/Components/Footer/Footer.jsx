import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="f-icons">
            <a href="https://www.instagram.com/munya.mp/?utm_source=ig_embed"><Insta color="white" size={"3rem"} /></a>
            <a href="https://www.linkedin.com/in/munyaradzi-siyawamwaya-333679168/"><Linkedin color="white" size={"3rem"} /></a>
            <a href="https://twitter.com/munya_mp"><Twitter color="white" size={"3rem"} /></a>
            <a href="https://www.facebook.com/munya.siyawamwaya/"><Facebook color="white" size={"3rem"} /></a>
            <a href="https://github.com/msiyaz"><Gitub color="white" size={"3rem"} /></a>
        </div>
        <div className="right">
        <span>©Munyaradzi Siyawamwaya. All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;