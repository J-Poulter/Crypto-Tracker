import React from 'react';
import './Cryptos.css';
import { connect } from 'react-redux';
import CryptoRow from '../../components/CryptoRow/CryptoRow';

const Cryptos = ({cryptos}) => {
  const allCryptos = cryptos.map(crypto => {
    return (
      <CryptoRow key={crypto.id} crypto={crypto} />
    )
  })

  const handleSubmit = () => {
    
  }

  return (
    <div className='cryptos-display'>
      <div className='cryptos-heading'>
        <h1 className='cryptos-title'>BINANCE TOP CRYPTOS</h1>
        <form>
          <label htmlFor='filter'>Sort By: </label>
          <select name='filter'>
            <option value='$:H-L'>Price: High to Low</option>
            <option value='$:L-H'>Price: Low to High</option>
            <option value='1H:H-L'>1h%: High to Low</option>
            <option value='1H:L-H'>1h%: Low to High</option>
            <option value='24H:H-L'>24h%: High to Low</option>
            <option value='24H:L-H'>24h%: Low to High</option>
            <option value='7D:H-L'>7d%: High to Low</option>
            <option value='7D:L-H'>7d%: Low to High</option>
          </select>
          <button type='submit'>Go!</button>
        </form>
      </div>
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
