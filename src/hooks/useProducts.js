import {useState, useEffect} from 'react'

const useProducts = () => {
    const [producted, setProducted] = useState([])
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducted(data));
    },[])
    return [producted, setProducted]
};

export default useProducts;