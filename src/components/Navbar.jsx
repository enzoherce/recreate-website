import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="nav-logo">Recreating Netflix</h1>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/series">Series</Link>
        <Link to="/movies">Movies</Link>
      </div>

      <Link to="/login">
        <button className="nav-button">Sign In / Create Account</button>
      </Link>
    </nav>
  );
};

export default Navbar;
