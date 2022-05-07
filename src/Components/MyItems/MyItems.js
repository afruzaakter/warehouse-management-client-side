// import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { toast } from 'react-toastify';

const MyItems = () => {
    const [items, setItems] = useState([]);

    console.log(items);

    useEffect(() =>{
       
        (async () => {
        const {data} = await axios.get(`http://localhost:5000/service?limit=5`);
        console.log(data);

        // if(!data?.success) return toast.error(data.error);
        setItems(data)

        })()

    },[])

    return (
        <div className='container m-5 p-5'>
            <h1 className='text-center'> My Items</h1>

            <table className="table">
  <thead>
    <tr>
  
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Supplier</th>
      <th scope="col">Photo</th>
      <th scope="col">Drescription</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   {
      items.map(item =>{
     
        return(
              
            <tr>
           
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td>{item.quantity}</td>
            <td>{item.suppler}</td>
            <td> <img className='w-25' src={item.image} alt="" /> </td>
            <td>{item.description}</td>
            <td className='d-flex'>
                <button className='btn me-2 btn-success' >Edit</button>
                <button className='btn btn-danger' >Delete</button>
            </td>
          </tr>
          )
     
      })
   }
    
  </tbody>
</table>

            

        </div>
    );
};

export default MyItems;