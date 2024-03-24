
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './component/appNavbar';
import Products from './component/products';
import Cart from './component/cart';

function App() {
  return (
    <div className="App">
    <NavBar />
    <Routes>  
      <Route path='/' element={<Products />} />
      <Route path='cart' element={<Cart />} /> 
    </Routes>
   
    </div>
  );
}

export default App;
