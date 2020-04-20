import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadTopCryptos } from '../../actions';
import { getCryptos } from '../../apiCalls';

const Header = ({favorites, loadTopCryptos}) => {
  const loadTop100 = () => {
    getCryptos('')
      .then(data => loadTopCryptos(data.data))
  }
  
  return (
    <header>
      <div className='header-container'>
        <Link to='./'>
          <img className='logo' src='https://image.flaticon.com/icons/svg/2506/2506151.svg' alt='Crypto Tracker logo'/>
        </Link>
        <h1 className='header-title'>Crypto-Tracker</h1>
      </div>
      <nav>
        <Link to='./'>
          <button>HOME</button>
        </Link>
        <Link to='./cryptos'>
          <button onClick={() => loadTop100()}>TOP 100</button>
        </Link>
        <Link to='./favorites'>
          <button>FAVORITES({favorites.length})</button>
        </Link>
      </nav>
    </header>
  )
}

const mapStateToProps = (state) => ({
  favorites: state.favorites
})

const mapDispatchToProps = (dispatch) => ({
  loadTopCryptos: cryptos => dispatch(loadTopCryptos(cryptos))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
