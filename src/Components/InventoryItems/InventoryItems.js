import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './InventoryItems.css';

const InventoryItems = () => {
  const [products, setProducts] = useState([]);
  // console.log(products);
  const { id } = useParams();
 
  //Handle stock product
  // const handleAddStock = (e) => {
  //      e.preventDefault();
  //      const stockQuantity = e.name.target.value;
  //      console.log(stockQuantity);
  // }
  //Handle Delivered part
  const handleDeliver = e =>{
   
    const quantity = products.quantity;
    // console.log(quantity);
    const newQuantity = parseInt(quantity-1);
    const items = {newQuantity};
  
    // console.log(items);

    const url = `https://shrouded-castle-17734.herokuapp.com/service/${id}`
    fetch(url,{
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({items})
    })
    .then (res=>res.json())
    .then(data =>{
      console.log('success', data);
      alert('users Add successfully');
      e.target.reset();
      
    })

  }


//product add
  useEffect(() => {
    const url = `https://shrouded-castle-17734.herokuapp.com/service/${id}`
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
          <button onClick={() => handleDeliver(products._id)}  className='btn btn-success social-style '>Delivered</button>
        </div>
      </div>

      <div className=''>
        <form className='w-50 mx-auto' >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

            <Form.Control className='addinputField' type="text" name="name" placeholder="Add Stock" />
          </Form.Group>
          <button className='btn btn-success social-style '>Add Stock</button>
        </form>
      </div>
    </div>
  );
};

export default InventoryItems;

// onClick={() => handleAddStock(products._id)} 