import React from 'react';
import useProducts from '../../hooks/useProducts';
// import banner from '../../images/slider/banner-img-.jpg';
import AllProducts from '../AllProducts/AllProducts'
import Order from '../Order/Order';
import './Home.css';
import blazer from '../../images/Blazer.png'
const Home = () => {
    const [producted, setProducted] = useProducts();
    return (
        <div className=' '>
            <div className=' banner-container'>
                <div className='d-flex justify-content-around align-items-center '>
                    <h1>Bangla desh </h1>
                    <img className='  banner-style ms-3' src={blazer} alt="" />
                </div>

            </div> 

            <div className='mt-5 mb-5 container'>
                <h2 className='text-center  mb-5'>inventory <span className='text-style '>items</span> </h2>
                <div className='g-4 row row-cols-1 row-cols-md-3'>
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