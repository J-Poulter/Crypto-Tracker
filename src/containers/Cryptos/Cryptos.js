import React from 'react';
import './Cryptos.css';
import { connect } from 'react-redux';
import CryptoRow from '../../components/CryptoRow/CryptoRow';

const Cryptos = ({cryptos}) => {
  console.log(cryptos)
  const allCryptos = cryptos.map(crypto => {
    return(
      <CryptoRow key={crypto.id} crypto={crypto} />
    )
  })

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
            <th>$ Change(1h)</th>
            <th>$ Change(24h)</th>
            <th>$ Change(7d)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {allCryptos}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cryptos: state.cryptos
})

export default connect(mapStateToProps)(Cryptos);
