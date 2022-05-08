import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({manageData}) => {
   
    const {_id,name,image,price,description,quantity,suppler}  = manageData;
    const navigate = useNavigate()
    const handleStockUpdate = (id) =>{
            navigate(`/inventoryItems/${id}`)
    }
    return (
        <div className='container '>
          <div className='card container h-100'>
          <img className='w-75' src={image} alt="" />
            <h4>{name}</h4>
            <h5>Price: ${price} </h5>
            <h5>Quantity: {quantity} Pis </h5>
            <p>supplier Name: {suppler} </p>
            <p>{description}</p>
            <button onClick={() => handleStockUpdate(_id)} className='btn btn-success me-3 mb-4'>Edit</button>
          </div>
        
       
        
        </div>
   
    );
};

export default Product;