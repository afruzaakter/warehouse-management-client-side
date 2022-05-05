import React from 'react';
import useProducts from '../../hooks/useProducts';
// import banner from '../../images/slider/banner-img-.jpg';
import AllProducts from '../AllProducts/AllProducts'
import Order from '../Order/Order';
import './Home.css';
const Home = () => {
    const [producted, setProducted] = useProducts();
    return (
        <div className='m-5 p-5'>
            <div className='  banner-container'>

            </div> 

            <div className='mt-5 mb-5'>
                <h2 className='text-center  mb-5'>inventory <span className='text-style '>items</span> </h2>
                <div className='productContainer'>
                    {
                        producted.slice(0, 6).map(allProducts => <AllProducts allProducts={allProducts}></AllProducts>)
                    }
                </div>
            </div>

            <Order></Order>
        </div>
    );
};

export default Home;