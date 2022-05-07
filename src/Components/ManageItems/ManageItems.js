import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';
import './ManageItems.css'
const ManageItems = () => {
    const [producted, setProducted] = useProducts();
    // console.log(producted);
    return (
        <div className=''>
           
            <div className='m-5 container p-5'>
                <h1 className='text-center mt-5 mb-5 p-3'>Our All <span className='text-style'>Products</span> </h1>
                <div className=' row row-cols-1 row-cols-md-3 g-4 '>
                    {
                        producted.map(manageData => <Product key = {manageData._id } manageData={manageData}></Product> )
                    }
                </div>

            </div>

        </div>
    );
};

export default ManageItems;