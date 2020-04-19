import React from 'react';
import './WelcomeCard.css';
import { Link } from 'react-router-dom';
import { getCryptos } from '../../apiCalls';
import { connect } from 'react-redux';
import { loadTopCryptos } from '../../actions';

const WelcomeCard = ({marketInfo = {}, loadTopCryptos}) => {
  const { coins_count = 0, active_markets = 0, total_mcap, btc_d, eth_d, avg_change_percent, volume_change } = marketInfo;
  
  const loadTop100 = () => {
    getCryptos('')
      .then(data => loadTopCryptos(data.data))
  }

  return (
    <section className='welcome-card'>
      <p>Total Cryptocurrencies: {coins_count.toLocaleString()}</p>
      <p>Total Active Exchange Markets: {active_markets.toLocaleString()}</p>
      <p>Total Market Cap: ${(total_mcap / 1000000000).toFixed(2)} Billion</p>
      <p>Bitcoin Market Dominance: {btc_d}%</p>
      <p>Etherium Market Dominance: {eth_d}%</p>
      <p>Accumulative Average Value Change (past 24h): {avg_change_percent}%</p>
      <p>Trading Volume Change (past 24h): {volume_change}%</p>
      <Link to='/cryptos'>
        <button onClick={() => loadTop100()} className='welcome-button'>Binance Top 100:</button>
      </Link>
    </section>
  )
}

const mapStateToProps = (state) => ({
  marketInfo: state.market
})

const mapDispatchToProps = (dispatch) => ({
  loadTopCryptos: cryptos => dispatch( loadTopCryptos(cryptos) )
})

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeCard);
