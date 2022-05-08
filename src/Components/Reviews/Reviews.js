import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import review1 from '../../images/review/user2.webp';
import review2 from '../../images/review/user3.webp';
import review3 from '../../images/review/user4.webp';

const Reviews = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <h1 className='text-center mt-5 mb-5 '>Our Client <span className='text-style'>Say!!!</span> </h1>
           <div  className='mt-5 mb-5 p-5  container bg-primary '>
           <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item >
                  <div className=''>
                  <div className='me-5'>
                    <img
                        className="d-block w-25 rounded-circle review-style-img"
                        src={review1}
                        alt="First slide"
                    />
                    </div>
                    <div>
                        <Carousel.Caption>
                        <div className='w-50 review-style w-50'>
                        <h3>Alden Smith</h3>
                        <p >Sed ut perspiciatis unde omnis iste natus error sit voluptatem amet laudantium, quaeillo inventore sed veritatis et quasi architecto beatae vitae dicta sunt explicabo eiusmod tempor incididunt ut labore.</p>
                        </div>
                    </Carousel.Caption>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-25 rounded-circle"
                        src={review2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                       <div className='review-style w-50'>
                       <h3>Daisy Lana</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem amet laudantium, quaeillo inventore sed veritatis et quasi architecto beatae vitae dicta sunt explicabo eiusmod tempor incididunt ut labore.</p>
                       </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-25 rounded-circle"
                        src={review3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                       <div className='w-50 review-style'>
                       <h3>John Becker <span> </span> </h3>
                        <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem amet laudantium, quaeillo inventore sed veritatis et quasi architecto beatae vitae dicta sunt explicabo eiusmod tempor incididunt ut labore.
                        </p>
                       </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
           </div>
        </div>
    );
};

export default Reviews;