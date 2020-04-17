import React from 'react';
import './CryptoRow.css';

const CryptoRow = (crypto) => {
  const { id, rank, name, symbol, price_usd, percent_change_1h, percent_change_24h, percent_change_7d } = crypto.crypto

  const formatNumber = (num) => {
    if (parseInt(num) > 0) {
      return num.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    } else {
      return num
    }
  }

  return (
    <tr className={percent_change_1h > 0 ? 'green row' : 'red row'}>
      <td className='rank-data'>{rank}</td>
      <td>{name}</td>
      <td>{symbol}</td>
      <td>${formatNumber(price_usd)}</td>
      <td>{percent_change_1h}%</td>
      <td>{percent_change_24h}%</td>
      <td>{percent_change_7d}%</td>
      <td><button id={id}>Detailed View</button></td>
    </tr>
  )
}

export default CryptoRow;
