import React from 'react';
import './CryptoRow.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCoinDetails, getSocialStats } from '../../apiCalls';
import { selectCrypto, getSocials } from '../../actions';

const CryptoRow = ({crypto, selectCrypto, getSocials}) => {
  const { id, rank, name, symbol, price_usd, percent_change_1h, percent_change_24h, percent_change_7d } = crypto

  const getDetailedCrypto = (id) => {
    getCoinDetails(id)
      .then(data => selectCrypto(data[0]))
      .then(
        getSocialStats(id)
          .then(socialData => getSocials(socialData))
      )
  }

  return (
    <tr className={percent_change_1h > 0 ? 'green row' : 'red row'}>
      <td className='rank-data'>{rank}</td>
      <td>{name}</td>
      <td>{symbol}</td>
      <td>${price_usd}</td>
      <td>{percent_change_1h > 0 ? '+' : ''}{percent_change_1h}%</td>
      <td>{percent_change_24h > 0 ? '+' : ''}{percent_change_24h}%</td>
      <td>{percent_change_7d > 0 ? '+' : ''}{percent_change_7d}%</td>
      <td>
        <Link to='/selected'>
          <button onClick={() => getDetailedCrypto(id)}>VIEW DETAILS</button>
        </Link>
      </td>
    </tr>
  )
}

const mapDispatchToProps = (dispatch) => ({
  selectCrypto: crypto => dispatch( selectCrypto(crypto) ),
  getSocials: socials => dispatch ( getSocials(socials) )
})

export default connect(null, mapDispatchToProps)(CryptoRow);
