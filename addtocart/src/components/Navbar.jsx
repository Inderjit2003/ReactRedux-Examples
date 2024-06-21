// src/components/Navbar.js

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <center>
    <Link to="/">
    <button >Products</button></Link>
    <Link to="/cart"><button>Cart</button></Link>
    </center>
  </nav>
);

export default Navbar;
