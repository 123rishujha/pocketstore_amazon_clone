import React from 'react';
import './Navbar.css';
//import { useGlobalContext } from '../../StateProvider';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MainPage from "../HomePage/MainPage";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <div className="navbar__menu nav__border">
          <MenuOutlinedIcon />
          <p>All</p>
        </div>
        <ul className="navbar__links">
          <li className="nav__link nav__border">Today's Deals</li>
          <li className="nav__link nav__border">Customer Service</li>
          <li className="nav__link nav__border desktop">Books</li>
          <li className="nav__link nav__border desktop">Export Store</li>
          <li className="nav__link nav__border desktop">About International Delivery</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
