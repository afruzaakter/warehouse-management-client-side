import React from 'react';

const Product = ({manageData}) => {
    const {name,img,price,description}  = manageData;
    
    return (
        <div className='container '>
          <div className='card container'>
          <img className='w-50' src={img} alt="" />
            <h4>{name}</h4>
            <h5>Price: ${price} </h5>
            <p>{description}</p>
            <button className='btn btn-success me-3 mb-4'>Edit</button>
          </div>
        
       
        
        </div>
   
    );
};

export default Product;