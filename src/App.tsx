import './App.css';
import ProductList from './components/ProductList';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div id='main' >
      <h1>ExitTraining Storefront</h1>
      <ProductList />
      <Login />
      <Register />
    </div>
  );
}
export default App;