import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../images/slider/order1.jpg'
import slider2 from '../../images/slider/order_2.png'
import slider3 from '../../images/slider/order_3.png'

const Order = () => {
    return (
        <div>
            <h1 className='text-center mb-5'>How to Order <span className='text-style'>From Dress Up?</span> </h1>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Order;