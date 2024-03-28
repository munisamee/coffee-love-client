import { NavLink } from "react-router-dom";
 
function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      
      <NavLink to="/coffees/new">
        <button>Add to Cart</button>
      </NavLink>

      <NavLink to="/coffees/new">
        <button>Signup</button>
      </NavLink>

      <NavLink to="/coffees/new">
        <button>Login</button>
      </NavLink>
    </nav>
  );
}
 
export default Navbar;