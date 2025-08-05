import './App.css';
import ProductList from './components/ProductList';
import Login from './components/Login';

function App() {
  return (
    <div id='main' >
      <h1>ExitTraining Storefront</h1>
      <ProductList />
      <Login />
    </div>
  );
}
export default App;