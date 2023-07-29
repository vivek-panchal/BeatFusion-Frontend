import React from "react";
import {
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import {
    SiLeetcode,
} from "react-icons/si";

import "./Newsletter.scss";
const Newsletter = () => {
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">
                    Sign up for latest updates and offers
                </span>
                <div className="form">
                    <input type="text" placeholder="Email Address" />
                    <button>Subscribe</button>
                </div>
                <span className="text">
                    Will be used in accordance with our Privacy Policy
                </span>
                <span className="social-icons">
                    <div className="icon">
                       <a href="https://www.linkedin.com/in/vivekpanchal2608/" target="_blank">
                            <FaLinkedinIn size={14} color="white"/>
                       </a>
                    </div>
                    <div className="icon">
                       <a href="https://github.com/vivek-panchal" target="_blank">
                            <FaGithub size={14} color="white"/>
                       </a>
                    </div>
                    <div className="icon">
                       <a href="https://leetcode.com/vivekpanchal/" target="_blank" >
                            <SiLeetcode size={14} color="white"/>
                       </a>
                    </div>
                    <div className="icon">
                       <a href="https://www.instagram.com/vivekpaanchal/" target="_blank">
                            <FaInstagram size={14} color="white" />
                       </a>
                    </div>
                </span>
            </div>
        </div>
    );
};

export default Newsletter;
