
import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
// import React, { useState } from 'react';

import { Link, useParams } from 'react-router-dom';

// import useProducts from '../../hooks/useProducts';
// import useProducts from '../../hooks/useProducts';


const Update = () => {
  const {id} = useParams();
  const [item, setItem] = useState({})
  // const [producted, setProducted] = useProducts();
  // console.log(item);

  useEffect(() =>{
    const url = `http://localhost:5000/service/${id}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => setItem(data))
  },[]);

  // const [producted, setProducted] = useProducts()
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    // const product = {
    //     name: e.target.name.value,
    //     price: e.target.price.value,
    //     image: e.target.image.value,
    //     suppler: e.target.suppler.value,
    //     quantity: e.target.quantity.value,
    //     description: e.target.description.value,
    // };
    const name = e.target.name.value;
    console.log("name",name);
    const price = e.target.price.value;
    console.log("price",price);
    const  quantity = e.target.quantity.value;
    console.log("quantity",quantity);
    const    suppler = e.target.suppler.value;
    console.log("suppler",suppler);
     
      const   image = e.target.image.value;
     console.log("image",image);
     const   description = e.target.description.value;
     console.log("description",description);

     const product = {name,price,image,suppler,quantity,description};

    console.log(product);
   const url = `http://localhost:5000/service/${id}`;
  console.log(url);

  fetch(url, {
    method: 'PUT',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(product)
})
.then(res => res.json())
.then(data =>{
    console.log('success', data);
    alert('users added successfully!!!');
    e.target.reset();
})


}
  return (
    <div className='m-5 p-5'>
      <h1 className='text-center ' >Update <span className='text-style'>Product</span> </h1>
      <Form onSubmit={handleUpdate} className="mx-auto w-50 login-form  p-4">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control className='addinputField' type="text" name="name" placeholder="Product Name"  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control className='addinputField' type="text" name="price" placeholder="Price" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control className='addinputField' type="text" name="quantity" placeholder="Quantity"  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control className='addinputField' type="text" name="suppler" placeholder="Supplier Name"  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control className='addinputField' type="text" name="image" placeholder="Photo Url"  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

          <Form.Control className='addinputField' as="textarea" name="description" placeholder='Product Description' rows={3} />
        </Form.Group>
        <button className='btn btn-success w-25 social-style'>Update</button>
        <Link to="/myitems"> <button className='btn btn-success w-25 ms-3'>Back</button> </Link>
        
      </Form>

     
    </div>
  );
};

export default Update;