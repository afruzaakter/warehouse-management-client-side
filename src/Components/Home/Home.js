import React from 'react';
import useProducts from '../../hooks/useProducts';
// import banner from '../../images/Blazer.png';
import AllProducts from '../AllProducts/AllProducts'
import './Home.css';
const Home = () => {
    const [producted, setProducted] = useProducts();
    return (
        <div className='m-5 p-5'>
            <div className='container d-flex justify-content-around m-5 p-5 '>
                <div className='m-4 p-4'>
                    <h1>hello</h1>
                </div>
                <div className='home-banner'>
                    {/* <img className='img-fluid w-50 ' src={banner} alt="" /> */}
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