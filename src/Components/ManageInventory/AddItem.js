import axios from 'axios';
import React from 'react';
import { Form } from 'react-bootstrap';

const AddItem = () => {
    const handleSubmitItem = async (e) =>{
        e.preventDefault();
        const product = {
            name: e.target.name.value,
            price: e.target.price.value,
            image: e.target.image.value,
            suppler: e.target.suppler.value,
            quantity: e.target.quantity.value,
            description: e.target.description.value,
        };
        console.log( product);
       const data = await axios.post("http://localhost:5000/products", product);
       console.log(data);

    //send data to server
    // fetch('http://localhost:5000/products',{
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(product)
    // })
    // .then(res=>res.json())
    // .then(data=>{
    //     console.log('success',data);
    // })

    };
    return (
        <div className='container m-5 p-5 text-center'>
            <h1 > Add <span className='text-style '>item </span> </h1>

            <Form onSubmit={handleSubmitItem} className='w-50 login-form p-5 mx-auto'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    
                    <Form.Control className='addinputField' type="text" name="name" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                   
                    <Form.Control name="price" className='addinputField' type="text" placeholder="Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                   
                    <Form.Control name="quantity" className='addinputField' type="text" placeholder="Quantity" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                   
                    <Form.Control name="suppler" className='addinputField' type="text" placeholder="Suppler" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                   
                    <Form.Control name="image" className='addinputField' type="text" placeholder="Photo url" />
                </Form.Group>
                <Form.Group  className="mb-3" controlId="exampleForm.ControlTextarea1">
                 
                    <Form.Control name="description" className='addinputField' as="textarea" rows={3} placeholder="Description" />
                </Form.Group>
                {/* <input className='btn btn-success social-style w-100 mt-3' type="button" value="Add Item" /> */}
                <button className='btn btn-success w-100 social-style'>Add Item</button>
            </Form>



        </div>
    );
};

export default AddItem;