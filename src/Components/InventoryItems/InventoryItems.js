import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './InventoryItems.css';

const InventoryItems = () => {
  const [products, setProducts] = useState([]);
  // console.log(products);
  const { id } = useParams();

  const handleDeliver = e =>{
    e.preventDefault();

  }


//product add
  useEffect(() => {
    const url = `http://localhost:5000/service/${id}`
    // console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <div className='product-container d-flex flex-column  m-5 p-5'>
      <div className='m-5 p-5 d-flex inventory-container'>
        <div>
          <img className='w-75' src={products.image} alt="" />
        </div>
        <div>
          <h4 className='mt-4 '>{products.name}</h4>
          <h5>Price: ${products.price}</h5>
          <h6>Quantity: {products.quantity}</h6>
          <h6>Supplier Name: {products.suppler}</h6>
          <p>{products.description}</p>
          <button  className='btn btn-success social-style '>Delivered</button>
        </div>
      </div>

      <div className=''>
        <form className='w-50 mx-auto' >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

            <Form.Control className='addinputField' type="text" name="name" placeholder="Name" />
          </Form.Group>
          <button className='btn btn-success social-style '>Add Stock</button>
        </form>
      </div>
    </div>
  );
};

export default InventoryItems;