import React from 'react';
import './CryptoRow.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCoinDetails } from '../../apiCalls';
import { selectCrypto } from '../../actions';

const CryptoRow = ({crypto, selectCrypto}) => {
  const { id, rank, name, symbol, price_usd, percent_change_1h, percent_change_24h, percent_change_7d } = crypto

  const getDetailedCrypto = (id) => {
    getCoinDetails(id)
    .then(data => selectCrypto(data[0]))
  }

  return (
    <tr className={percent_change_1h > 0 ? 'green row' : 'red row'}>
      <td className='rank-data'>{rank}</td>
      <td>{name}</td>
      <td>{symbol}</td>
      <td>${price_usd}</td>
      <td>{percent_change_1h}%</td>
      <td>{percent_change_24h}%</td>
      <td>{percent_change_7d}%</td>
      <td>
        <Link to='/selected'>
          <button onClick={() => getDetailedCrypto(id)}>Detailed View</button>
        </Link>
      </td>
    </tr>
  )
}

const mapDispatchToProps = (dispatch) => ({
  selectCrypto: crypto => dispatch( selectCrypto(crypto) ) 
})

export default connect(null, mapDispatchToProps)(CryptoRow);
