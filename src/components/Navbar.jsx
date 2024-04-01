// import { NavLink } from "react-router-dom";
 
// function Navbar() {
//   return (
//     <nav>
//       <NavLink to="/">
//         <button>Home</button>
//       </NavLink>
      
//       <NavLink to="/coffees/new">
//         <button>Add to Cart</button>
//       </NavLink>

//       <NavLink to="/coffees/new">
//         <button>Signup</button>
//       </NavLink>

//       <NavLink to="/coffees/new">
//         <button>Login</button>
//       </NavLink>
//     </nav>
//   );
// }
 
import { NavLink } from "react-router-dom";
import {Button, Container, Navbar, Modal} from 'react-bootstrap'
import { useState, useContext } from 'react';
import { CartContext } from '../pages/CartContext';

 
function NavbarComponent() {
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <>
    <Navbar expand="sm">
      <Navbar.Brand href="/">Coffee Love Bar</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Button onClick={handleShow}>Cart ({productsCount} Items)</Button>

      </Navbar.Collapse>

    </Navbar>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Title>Shopping Cart</Modal.Title>
      <Modal.Body>
        <h1>This is Your Shopping Cart</h1>
      </Modal.Body>
    </Modal>
    
    </>
  )
}
export default NavbarComponent;



// {
//   return (
//   //   <nav>
//   //     <NavLink to="/">
//   //       <button>Home</button>
//   //     </NavLink>
      
//   //     <NavLink to="/addtocart">
//   //       <button>Cart</button>
//   //     </NavLink>

//   //     <NavLink to="/signup">
//   //       <button>Checkout</button>
//   //     </NavLink>

//   //     <NavLink to="/signup">
//   //       <button>Signup</button>
//   //     </NavLink>

//   //     <NavLink to="/login">
//   //       <button>Login</button>
//   //     </NavLink>
//   //   </nav>
//   // );
// }