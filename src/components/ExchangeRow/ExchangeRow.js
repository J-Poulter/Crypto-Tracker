import React from 'react';
import './ExchangeRow.css';

const ExchangeRow = ({exchange = {}}) => {
  const { name, price_usd, volume, volume_usd } = exchange;
  
  const formattedNum = () => {
    if (price_usd) {
      return price_usd.toFixed(5)
    }
  }

  return (
      <tr className='exchange-row'>
        <td>{name}</td>
        <td>${formattedNum()}</td>
        <td>{(volume/1000000).toLocaleString()}</td>
        <td>${(volume_usd/1000000).toLocaleString()}</td>
      </tr>
  )
}

export default ExchangeRow;
