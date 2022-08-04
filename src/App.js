import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Product from './Product';
import ProductList from './ProductList';
import RequireAuth from './Private/RequireAuth';

function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        
        <Route path="/Product"
         element={<RequireAuth>  <Product/>
         </RequireAuth>}/>

       </Routes>
      
      </BrowserRouter>
  );
}

export default App;
