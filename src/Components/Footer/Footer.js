import React from 'react';
import { Link } from 'react-router-dom';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import facebook from '../../images/social/facebook (1).png'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='d-flex justify-content-around'>
           <div> <p> <small className=''>copyright@{year}</small> </p></div>
            <div className='d-flex m-3 '>
             <p className='p-1'></p>
             {/* <p className='p-1'>Facebook <FontAwesomeIcon icon="fa-brands fa-facebook-square" /></p> */}
             {/* <Link>
                 <img src={facebook} alt="" />
             </Link> */}
             <p className='p-1'>Youtube</p>
             <p className='p-1'>Linkedin</p>
             <p className='p-1'>Facebook</p>
            </div>
        </div>
    );
};

export default Footer;