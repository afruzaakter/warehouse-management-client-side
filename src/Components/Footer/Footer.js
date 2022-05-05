import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='d-flex justify-content-around'>
           <div> <p> <small className=''>copyright@{year}</small> </p></div>
            <div className='d-flex m-3 '>
             <p className='p-1'>Facebook</p>
             <p className='p-1'>Youtube</p>
             <p className='p-1'>Linkedin</p>
             <p className='p-1'>Facebook</p>
            </div>
        </div>
    );
};

export default Footer;