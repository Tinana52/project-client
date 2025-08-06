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
    const onCategoryClick = (event) => {
        const cat = event.target.value;
        const result = products.filter(function (prod){
            return prod.category === cat;
        });
        setProducts(result);
    }
    const searchFilter = (event) => {
        event.preventDefault();
        try{ 
            const search = document.getElementById("search").value;
            
            //console.log(search);
            //console.log(type);
            const result = products.filter(function (prod){
                return prod.name === search;
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
            <input type={'text'} id="search" className="searchInputs"></input><br></br>
            <button onClick={searchFilter} type="submit">Search</button>
        </form>
        
        <ul className="pList">
            {products.map((product: any, index: number) => (
                <li className="pCard" key={index}>
                    <h3>{product.name}</h3>
                    <div className="prod_title">
                        <p>{product.description}</p>
                        <div className="price">${product.price}</div>
                        
                    </div>
                    
                    <p className="bold">In-Stock: {product.on_hand}</p>
                    <button onClick={onCategoryClick} className="catButton" value={product.category}>{product.category}</button>
                    
                </li>
            ))}
        </ul>
        <button onClick={onResetClick} type="reset">Reset</button>
        
    </div>);
};
export default ProductList;