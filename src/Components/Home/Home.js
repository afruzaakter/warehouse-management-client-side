import React from 'react';
import useProducts from '../../hooks/useProducts';
// import banner from '../../images/slider/banner-img-.jpg';
import AllProducts from '../AllProducts/AllProducts'
import Order from '../Order/Order';
import './Home.css';
import blazer from '../../images/Blazer.png'
import Reviews from '../Reviews/Reviews';
const Home = () => {
    const [producted] = useProducts();
    return (
        <div className=' '>
            <div className=' banner-container'>
                <div className='d-flex justify-content-around align-items-center bannerStyle '>
                   <div>
                   <p className='fs-3 fw-3'>50% off in all products</p>
                    <h1 className=''>Man <span className='text-style'>Fashion</span> </h1>
                    <button className='btn btn-success social-style p-2'>Shop Now</button>
                   </div>
                    <img className='  banner-style ms-3' src={blazer} alt="" />
                </div>

            </div> 

            <div className='mt-5 mb-5 container inventoryContainer'>
                <h2 className='text-center inventoryContainer  mb-5'>inventory <span className='text-style '>items</span> </h2>
                <div className='g-4 inventoryContainer row row-cols-1 row-cols-md-3'>
                    {
                        producted.slice(0, 6).map(allProducts => <AllProducts allProducts={allProducts}></AllProducts>)
                    }
                </div>
            </div>

            <Order></Order>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;