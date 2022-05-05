import React from 'react';
import useProducts from '../../hooks/useProducts';
import banner from '../../images/slider/banner-img-.jpg';
import AllProducts from '../AllProducts/AllProducts'
import './Home.css';
const Home = () => {
    const [producted, setProducted] = useProducts();
    return (
        <div className='m-5 p-5'>
            <div className='container d-flex justify-content-around align-items-center banner-container'>
                
                <div className=' banner-image w-75 ps-0 '> 
                    <img className='img-fluid w-75 ' src={banner} alt="" /> 
                </div>
                <div className=''>
                    <h1>Best Price 
                        <br />
                        <span className='text-style'>This Year</span> </h1>
                </div>

            </div> 

            <div className='mt-5 mb-5'>
                <h2 className='text-center  mb-5'>Our <span className='text-style '>Products</span> </h2>
                <div className='productContainer'>
                    {
                        producted.slice(0, 6).map(allProducts => <AllProducts allProducts={allProducts}></AllProducts>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;