import React from 'react';
import './FavoriteCard.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCrypto } from '../../actions';


const FavoriteCard = ({favorite, selectCrypto }) => {
  const { name, symbol, price_usd, percent_change_24h } = favorite
  return (
    <div className='favorite-card'>
      <p>Crypto: {name} (<span>{symbol}</span>)</p>
      <p>Price: {price_usd}</p>
      <p>Price Movement (24H): {percent_change_24h}</p>
      <Link to='./selected'>
        <button onClick={() => selectCrypto(favorite)}>View More</button>
      </Link>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  selectCrypto: crypto => dispatch ( selectCrypto(crypto) )
})

export default connect(null, mapDispatchToProps)(FavoriteCard);
