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
    const searchFilter = (event) => {
        event.preventDefault();
        const search = document.getElementById("search").value;
        console.log(search);
        const result = products.filter(function (prod){
           return prod.name === search;
        });
        console.log(result);
        setProducts(result);
    };
    //console.log(products);
    return (<div className='app'>
        <h2>Product List</h2>
        <form className="searchForm">
            <label htmlFor="search">Search:</label>
            <input type={'text'} id="search" className="searchInput"></input>
            <button onClick={searchFilter} className="searchButton" type="submit">Submit</button>
        </form>
        <ul className="pList">
            {products.map((product: any, index: number) => (
                <li className="pCard" key={index}>
                    <h3>{product['name']}</h3>
                    <img src={product.img_link}></img>
                    {product.description} <br></br>
                    Price: ${product.price} <br></br>
                    Category: {product.category}
                </li>
            ))}
        </ul>
    </div>);
};
export default ProductList;