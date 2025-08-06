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
        <form className="searchForm">
            <label htmlFor="search">Search:</label>
            <input type={'text'} id="search" className="searchInput"></input>
            <button className="searchButton" type="submit">Submit</button>
        </form>
        <ul className="pList">
            {products.map((product: any, index: number) => (
                <li className="pCard" key={index}>
                    <h3>{product['name']}</h3>
                    {product.description} <br></br>
                    Price: ${product.price} <br></br>
                    Category: {product.category}

                </li>
            ))}
        </ul>
    </div>);
};
export default ProductList;