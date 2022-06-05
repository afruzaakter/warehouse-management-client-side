import { useState, useEffect } from 'react'

const useProducts = () => {
    const [producted, setProducted] = useState([])
    useEffect(() => {
        fetch('https://shrouded-castle-17734.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setProducted(data));
    }, [])
    return [producted, setProducted]
};

export default useProducts;