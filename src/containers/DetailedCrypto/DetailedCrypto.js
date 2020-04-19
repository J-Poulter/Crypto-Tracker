import React from 'react';
import { connect } from 'react-redux';
import './DetailedCrypto.css';
import { loadExchanges, toggleFavorite } from '../../actions';
import { getExchanges } from '../../apiCalls';
import { Link } from 'react-router-dom';

const DetailedCrypto = ({crypto = {}, loadExchanges, toggleFavorite, favorites}) => {
  const { id, name, symbol, rank, price_usd, price_btc = 0, percent_change_1h, percent_change_24h, percent_change_7d, market_cap_usd, tsupply, msupply, reddit = {}, twitter = {} } = crypto

  const loadTopExchanges = (id) => {
    getExchanges(id)
    .then(data => loadExchanges(data))
  }

  const formatNumber = (number) => {
    if (number) {
      return parseInt(number).toLocaleString()
    } else {
      return 'Not Available'
    }
  }


  
  return (
    <section className='selected-card'>
      <h2>{name}</h2>    
      <p>{symbol}</p>    
      <button onClick={() => handleFavoriteClick(id)} type='button'>
        {isFavoriteCheck(id) ? 'Remove From Favorites' : 'Add To Favorites'}
      </button>
      <p>Rank: {rank}</p>    
      <p>${price_usd}</p>  
      <p>Price(BTC): {price_btc}</p>  
      <p>Movement (1H): {percent_change_1h}%</p>
      <p>Movement (24H): {percent_change_24h}%</p>
      <p>Movement (7D): {percent_change_7d}%</p>
      <p>Market Cap (thousands): ${formatNumber(market_cap_usd / 1000)}</p>
      <p>Current Supply: {formatNumber(tsupply)}</p>
      <p>Eventual Maximum Supply: {formatNumber(msupply)}</p>
      <h3>Social Stats:</h3>
      <p>Sub-Reddit Subscribers: {formatNumber(reddit.subscribers)}</p>
      <p>Sub-Reddit Average Active Users: {formatNumber(reddit.avg_active_users)}</p>
      <p>Twitter Followers: {formatNumber(twitter.followers_count)}</p>
      <p>Twitter Statuses Count: {formatNumber(twitter.status_count)}</p>
      <p>To compare the top 50 crypto exchanges that trade this crypto, click the button below!</p>
      <Link to='/exchanges'>
        <button onClick={() => loadTopExchanges(id)} className='selected-button'>Compare Exchanges</button>
      </Link>
    </section>
  )
};

const mapStateToProps = (state) => ({
  crypto: state.selected,
  favorites: state.favorites,
})

const mapDispatchToProps = (dispatch) => ({
  loadExchanges: exchanges => dispatch( loadExchanges(exchanges) ),
  toggleFavorite: cryptos => dispatch ( toggleFavorite(cryptos) )
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailedCrypto);
