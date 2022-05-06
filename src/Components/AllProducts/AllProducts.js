import React from 'react';
import { useNavigate ,Link} from 'react-router-dom';

const AllProducts = ({ allProducts }) => {
    const navigate = useNavigate()
    const handleStockUpdate = (id) =>{
            navigate(`/inventoryItems/${id}`)
    }
    const {_id, name, img, price, description, quantity, supplierName } = allProducts;
    return (
        <div>
            <div className=' card p-3 h-100 products'>
                <img className='img-fluid w-75 h-50' src={img} alt="" />
                <h4>{name}</h4>
                <h5>Price: ${price} </h5>
                <p>quantity: {quantity}</p>
                <p>supplier: {supplierName}</p>
                <p>{description}</p>
                <button onClick={() => handleStockUpdate(_id)} className='social-style btn btn-success '>Stock Update</button>

            
            </div>

        </div>
    );
};

export default AllProducts;