import { useState, useEffect } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const getProducts = function(){
        fetch('https://project-server-63ho.onrender.com/api/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data);
        });
    };
    useEffect(() => {getProducts()}, [] );
    //console.log(products);
    return (<div className='app'>
        <h2>Product List</h2>
        <ul>
            {products.map((product: any, index: number) => (
                <li key={index}>
                    {product['name']}
                </li>
            ))}
        </ul>
    </div>);
};
export default ProductList;