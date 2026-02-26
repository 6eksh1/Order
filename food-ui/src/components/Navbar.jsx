import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-wrapper">

        {/* ===== Logo ===== */}
        <Link to="/" className="logo">
          Order <span className="logo-box"></span>
        </Link>

        {/* ===== Desktop Menu ===== */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" className="nav-item">
              Home
            </NavLink>
          </li>

          <li>
<NavLink to="/offers" className="nav-item">
  Special Offers
</NavLink>
          </li>

          <li>
            <NavLink to="/restaurant" className="nav-item">
              Restaurants
            </NavLink>
          </li>

          <li>
<NavLink to="/order" className="nav-item">
  Order
</NavLink>
          </li>

          {/* Right Side Buttons */}
<li>
  <NavLink to="/login" className="btn-outline">
    Login
  </NavLink>
</li>

<li>
  <NavLink to="/signup" className="btn-primary">
    Sign Up
  </NavLink>
</li>

        </ul>

        {/* ===== Mobile Toggle ===== */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;