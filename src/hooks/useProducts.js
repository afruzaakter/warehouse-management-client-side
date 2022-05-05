import {useState, useEffect} from 'react'

const useProducts = () => {
    const [producted, setProducted] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setProducted(data));
    },[])
    return [producted, setProducted]
};

export default useProducts;