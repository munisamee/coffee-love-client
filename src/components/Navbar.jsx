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
        <NavLink to="/signup" className="btn btn-primary mx-2">Sign Up</NavLink>
        <NavLink to="/login" className="btn btn-secondary">Login</NavLink>

      </Navbar.Collapse>

    </Navbar>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {productsCount > 0 ?
        <> 
        
        <p>Items in your cart:</p>
        {cart.items.map((currentProduct, idx) => (
          <h1>{currentProduct.title}</h1>
        ))}
       
        <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
        <Button variant="success">
          Purchased item!
        </Button>
        </>
        :
        <h1>There are no items in your cart!</h1>
      }
      
      </Modal.Body>
    </Modal>
    
    </>
  )
}
export default NavbarComponent;