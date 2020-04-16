import React from 'react';
import './WelcomeCard.css';

const WelcomeCard = ({ marketInfo }) => {
  const { coins_count, active_markets, total_mcap, btc_d, eth_d, avg_change_percent, volume_change } = marketInfo;

  return (
    <section className='welcome-card'>
      <p>Total Cryptocurrencies: {coins_count}</p>
      <p>Total Active Exchange Markets: {active_markets}</p>
      <p>Total Market Cap: ${(total_mcap / 1000000000).toFixed(2)} Billion</p>
      <p>Bitcoin Market Dominance: {btc_d}%</p>
      <p>Etherium Market Dominance: {eth_d}%</p>
      <p>Accumulative Average Value Change (past 24h): {avg_change_percent}%</p>
      <p>Trading Volume Change (past 24h): {volume_change}%</p>
      <button className='welcome-button'>Binance Top 100:</button>
    </section>
  )
}

export default WelcomeCard;
