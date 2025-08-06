import { useState, useEffect } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [fullProducts, setFullProducts] = useState([])
    const getProducts = async function(){
        await fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data);
            setFullProducts(data);
        });
    };
    useEffect(() => {getProducts()}, [] );
    const searchFilter = (event) => {
        event.preventDefault();
        try{ 
            const search = document.getElementById("search").value;
            const type = document.getElementById("type").value;
            
            //console.log(search);
            //console.log(type);
            const result = products.filter(function (prod){
                return prod[type] === search;
            });
            if(!search || result.length === 0){
                throw new Error("Please input a valid filter option.");
            }
            console.log(result);
            setProducts(result);
        } catch(e){
            console.log(e);
            alert(e);
        }
    };
    const onResetClick = () => {
        setProducts(fullProducts);
        document.getElementById("search").value = '';
    };
    //console.log(products);
    return (<div className='app'>
        <h2>Product List</h2>
        <form className="searchForm">
            <select name="type" id="type">
                <option value="name">Product Name</option>
                <option value="id">Product ID</option>
                <option value="category">Product Category</option>
            </select>
            <input type={'text'} id="search" className="searchInputs"></input>
            <button onClick={searchFilter} type="submit">Search</button>
        </form>
        
        <ul className="pList">
            {products.map((product: any, index: number) => (
                <li className="pCard" key={index}>
                    <h3>{product.name}</h3>
                    <div className="prod_title">
                        <p>{product.description}</p>
                        ${product.price}
                    </div>
                    
                    
                    Category: {product.category}
                </li>
            ))}
        </ul>
        <button onClick={onResetClick} type="reset">Reset</button>
        
    </div>);
};
export default ProductList;