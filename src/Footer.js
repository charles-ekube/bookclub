import React from 'react';
import './App.css';
import logo from "./images/logo.png";
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

function Footer () {
    return (
        <>
            <footer>
                <img src={logo} alt="logo"/>
                <ul>
                    <li><FaTwitter/></li>
                    <li><FaFacebook/></li>
                    <li><FaInstagram/></li>
                    <li><FaLinkedin/></li>
                    <li><FaYoutube/> </li>
                </ul>
            </footer>
        </>
    )
}

export default Footer;