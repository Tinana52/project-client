import './App.css';
import ProductList from './components/ProductList';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Product from './components/Product';
import { Route, Routes, Navigate, NavLink} from 'react-router';

function App() {
  return (
    <div id='main' >
      <h1>ExitTraining Storefront</h1>
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductList />} />
        {/* <Route path="/product" element={<Product />} /> */}
      </Routes>
    </div>
  );
}
export default App;