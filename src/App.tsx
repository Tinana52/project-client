import './App.css';
import ProductList from './components/ProductList';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import { Route, Routes, Navigate, NavLink} from 'react-router';
import { useState, useEffect } from 'react';

function App() {
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
  return (
    <div id='main' >
      <h1>ExitTraining Storefront</h1>
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductList products={products} setProducts={setProducts} 
        fullProducts={fullProducts} setFullProducts={setFullProducts} />} />
      </Routes>
      <footer>
        <p>Copyright &copy; 2025 all rights reserved</p>
      </footer>
      
    </div>
  );
}
export default App;