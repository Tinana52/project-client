import {useSearchParams} from 'react-router';
import { useState, useEffect } from 'react';

const Product = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [product, setProduct] = useState([]);
    const name = searchParams.get('name');
    const url = `https://project-server-63ho.onrender.com/api/products/search?name=${name}`;
    const getProduct = function(){
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setProduct(data);
        });
    };
    useEffect(() => {getProduct()}, [] );
    console.log(product[0]);
    return (<div className='app'>
        <h2>Product</h2>
    </div>);
}
export default Product;