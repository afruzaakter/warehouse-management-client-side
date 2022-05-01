import React from 'react';

const Product = ({product}) => {
    const {name,img,price,description}  = product;
    
    return (
        <div >
           
          <div className=''>
          <div>
          <img src={img} alt="" />
            <h4>{name}</h4>
            <h5>{price} </h5>
            <p>{description}</p>
          </div>
          </div>
        </div>
    );
};

export default Product;