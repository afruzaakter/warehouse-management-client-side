import React from 'react';

const Product = ({manageData}) => {
    const {name,image,price,description,quantity,suppler}  = manageData;
    
    return (
        <div className='container '>
          <div className='card container h-100'>
          <img className='w-75' src={image} alt="" />
            <h4>{name}</h4>
            <h5>Price: ${price} </h5>
            <h5>Quantity: {quantity} Pis </h5>
            <p>supplier Name: {suppler} </p>
            <p>{description}</p>
            <button className='btn btn-success me-3 mb-4'>Edit</button>
          </div>
        
       
        
        </div>
   
    );
};

export default Product;