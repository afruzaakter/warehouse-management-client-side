import React from 'react';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import facebook from '../../images/social/facebook (1).png';
import google from '../../images/social/google.png';
import github from '../../images/social/github.png';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='d-flex justify-content-around  p-3'>
           <div> <p> <small className=''>copyright@{year}</small> </p></div>
            <div className='d-flex'>
             <p className='p-1'></p>       
           <a className='me-3' href="https://www.facebook.com/afruza.sonia.3">  <img src={facebook} alt="" /> </a>
           <a className='me-3' href="https://www.google.com/">  <img src={google} alt="" /> </a>
           <a href="https://github.com/afruzaakter?tab=repositories">  <img src={github} alt="" /> </a>
            </div>
        </div>
    );
};

export default Footer;