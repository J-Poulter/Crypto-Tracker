import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='header-title'>
        <img className='logo' src='https://image.flaticon.com/icons/svg/2506/2506151.svg' alt='Crypto Tracker logo'/>
        <h1 className='header-title'>Crypto-Tracker</h1>
      </div>
      <nav>
        <Link to='./cryptos'>
          <button>Top 100</button>
        </Link>
        <Link to='./favorites'>
          <button>Favorites</button>
        </Link>
        <Link to='./'>
          <button>Home</button>
        </Link>
      </nav>
    </header>
  )
}

export default Header;
