import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">MediClaimAI</NavLink>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>

        <li>
          <NavLink to="/predict">Predict</NavLink>
        </li>

        <li>
          <NavLink to="/faq">FAQ</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
    <NavLink to="/settings">Settings</NavLink>
</li>
      </ul>
       
      <div className="auth-buttons">
        <NavLink to="/login" className="login-btn">
          Login
        </NavLink>

        <NavLink to="/register" className="register-btn">
          Register
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
