import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav id="navbar">
      <span>
        <a href="/about" className="navbar__link">
          About Us
        </a>
      </span>
    </nav>
  );
}
export default Navbar;