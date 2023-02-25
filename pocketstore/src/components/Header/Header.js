import React from 'react';
import './Header.css';
import logo from '../../media/pocketstore.png';
import { Link} from 'react-router-dom';
import usaIcon from '../../media/India.webp';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Navbar from '../Navbar/Navbar';

function Header() {
  return (
    <>
    <div className="header">
      <Link to="/">
        <div className="header__border">
          <img src={logo}  alt="" className="header__logo"/>
        </div>
      </Link>
      <div className="header__border_deliverBorder">
        <div className="header__deliver">
          <RoomOutlinedIcon />
          <div className="header__option">
            <span  className="header__optionLineOne" >Deliver to</span>
            <span style={{marginBottom:"-20%",fontSize:"14px",fontWeight:"800"}} className="header__optionLineTwo">Banglore</span>
          </div>
        </div>
      </div>

      <div className="header__search">
             <select className="nav__dropdown">
              <option value="All">All</option>
              <option value="Alexa">Alexa</option>
              <option value="Books">Books</option>
              <option value="Baby">Baby</option>
              <option value="Beauty">Beauty</option>
              <option value="Clothes">Clothes</option>
            </select>  
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__border languageBorder">
          <div className="header__option header__language">
            <img className="header__flag" src={usaIcon} alt="" />
          </div>
        </div>

        <div className='main'>
          <div>
          <Link to="/login">
          <h2 className='header-main-h2'>Hello, Sign in</h2>
          <p className='header-main-p'> Account & Lists</p>
          </Link>
          </div> 
          <div>
          <Link>
          <h2 className='header-main-h2'>Returns</h2>
          <p className='header-main-p'>& Orders</p>
          </Link>
          </div>
   
        </div>

        <Link to="/" className="header__basket" >
          <div className="header__border">
            <div className="header__optionBasket">
              <ShoppingCartOutlinedIcon />
              <span className="header__optionLineTwo header__basketCount">   
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
    <Navbar/>
    </>
  );
}

export default Header;
