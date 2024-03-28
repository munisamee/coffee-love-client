import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import AddToCart from "./pages/AddToCart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Product from "./pages/Product";
import Error from "./pages/Error";

function App() {
    return (
      <div className="App">
        <Navbar />
  
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addtocart' element={<AddToCart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/product' element={<Product />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    );
  }
  export default App;
