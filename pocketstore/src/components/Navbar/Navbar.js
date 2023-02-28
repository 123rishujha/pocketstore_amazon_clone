import React from "react";
import "./Navbar.css";
//import { useGlobalContext } from '../../StateProvider';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import MainPage from "../HomePage/MainPage";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <div className="navbar__menu nav__border">
          <MenuOutlinedIcon />
          <p>All</p>
        </div>
        <ul className="navbar__links">
          <li className="nav__link nav__border">
            <Link to="/products">Today's Deals</Link>
          </li>
          <li className="nav__link nav__border">
            <Link to="/products">Customer Service</Link>
          </li>
          <li className="nav__link nav__border desktop">
            <Link to="/products">Books</Link>
          </li>
          <li className="nav__link nav__border desktop">
            <Link to="/products">Export Store</Link>
          </li>
          <li className="nav__link nav__border desktop">
            <Link to="/products">About International Delivery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
