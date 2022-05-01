import React from 'react';
import bg from '../../images/social/404 image.png'
const NotFound = () => {
    return (
        <div>
            <img src={bg} alt="" />
            <h4>Try Search again or go to Home Page</h4>
            <link  to="/home" className='btn btn-success'> Home Page</link> 
        </div>
    );
};

export default NotFound;