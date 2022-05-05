import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './InventoryItems.css';

const InventoryItems = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='product-container'>
        <div className='bg-primary p-5 w-50 mt-5'>
            <h4 className='mt-4 '>All Product</h4>
        </div>
        <div className='mt-5'>
        <h1 className='text-center mt-5 mb-5 p-3'>Our All <span className='text-style'>Products</span> </h1> 
            <div className='productContainer container'>
                {
                  products.map(product =><Product key = {product.id} product = {product}>

                  </Product>)
                }
            </div>

        </div>
        
    </div>
    );
};

export default InventoryItems;