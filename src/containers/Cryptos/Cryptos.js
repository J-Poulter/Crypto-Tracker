import React from 'react';
import './Cryptos.css';
import { connect } from 'react-redux';
import CryptoRow from '../../components/CryptoRow/CryptoRow';
import { loadTopCryptos } from '../../actions';

const Cryptos = ({cryptos, loadTopCryptos}) => {
  const allCryptos = cryptos.map(crypto => {
    return (
      <CryptoRow key={crypto.id} crypto={crypto} />
    )
  })
  
  const cryptoFilterOption = document.querySelector('.crypto-filter-options')

  const handleSubmit = (event, option) => {
    event.preventDefault()
    function determineSorter() {
      switch (option) {
        case '$:H-L':
          return cryptos.sort((a, b) => b.price_usd - a.price_usd)
        case '$:L-H':
          return cryptos.sort((a, b) => a.price_usd - b.price_usd)
        case '1H:H-L':
          return cryptos.sort((a, b) => b.percent_change_1h - a.percent_change_1h)
        case '1H:L-H':
          return cryptos.sort((a, b) => a.percent_change_1h - b.percent_change_1h)
        case '24H:H-L':
          return cryptos.sort((a, b) => b.percent_change_24h - a.percent_change_24h)
        case '24H:L-H':
          return cryptos.sort((a, b) => a.percent_change_24h - b.percent_change_24h)
        case '7D:H-L':
          return cryptos.sort((a, b) => b.percent_change_7d - a.percent_change_7d)
        case '7D:L-H':
          return cryptos.sort((a, b) => a.percent_change_7d - b.percent_change_7d)
        default: break
      }
    }
    loadTopCryptos(determineSorter())
  }

  return (
    <div className='cryptos-display'>
      <div className='table-heading'>
        <h1 className='page-title cryptos-title'>BINANCE TOP CRYPTOS</h1>
        <form className='cryptos-form' onSubmit={(event) => handleSubmit(event, cryptoFilterOption.value)}>
          <label htmlFor='filter'>Sort By: </label>
          <select name='filter' className='crypto-filter-options'>
            <option value='$:H-L'>Price: High to Low</option>
            <option value='$:L-H'>Price: Low to High</option>
            <option value='1H:H-L'>1h%: High to Low</option>
            <option value='1H:L-H'>1h%: Low to High</option>
            <option value='24H:H-L'>24h%: High to Low</option>
            <option value='24H:L-H'>24h%: Low to High</option>
            <option value='7D:H-L'>7d%: High to Low</option>
            <option value='7D:L-H'>7d%: Low to High</option>
          </select>
          <button className='submit-button' type='submit'>GO!</button>
        </form>
      </div>
      <p className='update-instructions'>(to update prices/information, click top 100 button in the header)</p>
      <table>
        <thead>
          <tr>
            <th>RANK</th>
            <th>NAME</th>
            <th>TICKER</th>
            <th>PRICE</th>
            <th>PRICE MOVEMENT (1H)</th>
            <th>PRICE MOVEMENT (24H)</th>
            <th>PRICE MOVEMENT (7D)</th>
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

const mapDispatchToProps = (dispatch) => ({
  loadTopCryptos: cryptos => dispatch( loadTopCryptos(cryptos) )
})

export default connect(mapStateToProps, mapDispatchToProps)(Cryptos);
