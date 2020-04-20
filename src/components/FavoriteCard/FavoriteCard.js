import React from 'react';
import './FavoriteCard.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCrypto, toggleFavorite } from '../../actions';


const FavoriteCard = ({favorite, selectCrypto, favorites, toggleFavorite }) => {
  const { id, name, symbol, price_usd, percent_change_24h } = favorite

  const removeFromFavorites = (id) => {
    const filteredFavorites = favorites.filter(favorite => favorite.id !== id)
    toggleFavorite(filteredFavorites)
    localStorage.setItem('favorites', JSON.stringify(filteredFavorites))
  }
  
  return (
    <div className='favorite-card'>
      <button className='remove-button' onClick={() => removeFromFavorites(id)}>REMOVE</button>
      <p>{name} (<span>{symbol}</span>)</p>
      <p>Price: ${price_usd}</p>
      <p>Price Movement (24H): {percent_change_24h}%</p>
      <Link to='./selected'>
        <button onClick={() => selectCrypto(favorite)}>VIEW MORE</button>
      </Link>
    </div>
  )
}

const mapStateToProps = (state) => ({
  favorites: state.favorites
})

const mapDispatchToProps = (dispatch) => ({
  selectCrypto: crypto => dispatch( selectCrypto(crypto) ),
  toggleFavorite: cryptos => dispatch( toggleFavorite(cryptos) )
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCard);
