// import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import useProducts from '../../hooks/useProducts';


const MyItems = () => {
   
    const [items, setItems] = useState([]);
    // const [producted, setProducted] = useProducts();

//    const navigate = useNavigate();

    //update my item part
// const handleUpdate = (id) => {
//     navigate('./update');
// }
    

    //delete my item part
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
          const url = `http://localhost:5000/service/${id}`
            console.log(url);

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(service => service._id !== id)
                    setItems(remaining);
                })

        }
    }

    // console.log(items);

    useEffect(() => {

        (async () => {
            const { data } = await axios.get('http://localhost:5000/service?limit=5');
            // console.log(data);
            // if(!data?.success) return toast.error(data.error);
            setItems(data)

        })()

    }, [])

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
                        items.map(item => {
                            <div key={item._id}></div>
                            return (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.suppler}</td>
                                    <td> <img className='w-25' src={item.image} alt="" /> </td>
                                    <td>{item.description}</td>
                                    <td className='d-flex'>
                                      
                                        <Link to={`/update/${item._id}`}>
                                        <button className='btn btn-success me-2' >Update</button>
                                        </Link>

                                        <button onClick={() => handleDelete(item._id)} className='btn btn-danger' >Delete</button>
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