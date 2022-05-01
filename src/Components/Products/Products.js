import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';
const Products = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className='container m-5 p-5'>
            <div className=''>
                <h1 className='text-center mt-5 mb-5'>Our <span className='text-style'>Products</span> </h1> 
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

export default Products;