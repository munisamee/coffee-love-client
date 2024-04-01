import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import { Container } from 'react-bootstrap';
import Home from "./pages/HomePage";
import AddToCart from "./pages/AddToCart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Product from "./pages/Product";
import Error from "./pages/Error";
import CartProvider from "./pages/CartContext";


function App() {
    return (
      <div className="App">
        <CartProvider>
      <Container>
        <NavbarComponent></NavbarComponent>


     </Container>
    
  
     <Routes>
          <Route path ='/' element={<Home />} />
          <Route path='/addtocart' element={<AddToCart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/product' element={<Product />} />
          <Route path='*' element={<Error />} />
        </Routes>
        </CartProvider>
   </div>
    );
  }
  export default App;
