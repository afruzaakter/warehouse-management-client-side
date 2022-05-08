import React from 'react';

const ProductDetails = ({product}) => {
    const {name,img,price,description}  = product;
    return (
        <div>
             <div>
          <img src={img} alt="" />
            <h4>{name}</h4>
            <h5>Price: ${price} </h5>
            <p>{description}</p>
          </div>
        
         <button className='btn btn-success me-3'>Update</button>
          <button className='btn btn-danger'>Delete
          </button>
        </div>
    );
};

export default ProductDetails;