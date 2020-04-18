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
  
  return (
    <section className='selected-card'>
      <h2>{name}</h2>    
      <p>{symbol}</p>    
      <p>{rank}</p>    
      <p>{price_usd}</p>    
      <p>{percent_change_1h}</p>
      <p>{percent_change_24h}</p>
      <p>{percent_change_7d}</p>
      <p>{market_cap_usd}</p>
      <p>{tsupply}</p>
      <p>{msupply}</p>
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
