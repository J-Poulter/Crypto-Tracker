import React from 'react';
import { connect } from 'react-redux';
import './DetailedCrypto.css';
import { loadExchanges } from '../../actions';
import { getExchanges } from '../../apiCalls';
import { Link } from 'react-router-dom';

const DetailedCrypto = ({crypto = {}, loadExchanges}) => {
  const { id, name, symbol, rank, price_usd, percent_change_1h, percent_change_24h, percent_change_7d, market_cap_usd, tsupply, msupply } = crypto

  const loadTopExchanges = (id) => {
    getExchanges(id)
    .then(data => loadExchanges(data))
  }

  const formatNumber = (number) => {
    return parseInt(number).toLocaleString()
  }
  
  return (
    <section className='selected-card'>
      <h2>{name}</h2>    
      <p>{symbol}</p>    
      <p>Rank: {rank}</p>    
      <p>${price_usd}</p>    
      <p>Movement (1h): {percent_change_1h}%</p>
      <p>Movement (24h): {percent_change_24h}%</p>
      <p>Movement (7d): {percent_change_7d}%</p>
      <p>Market Cap (thousands): ${formatNumber(market_cap_usd / 1000)}</p>
      <p>Current Supply: {formatNumber(tsupply)}</p>
      <p>Eventual Maximum Supply: {formatNumber(msupply)}</p>
      <h3>Social Stats:</h3>
      <Link to='/exchanges'>
        <button onClick={() => loadTopExchanges(id)} className='selected-button'>Compare Exchanges</button>
      </Link>
    </section>
  )
};

const mapStateToProps = (state) => ({
  crypto: state.selected
})

const mapDispatchToProps = (dispatch) => ({
  loadExchanges: exchanges => dispatch( loadExchanges(exchanges) )
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailedCrypto);
