import React from 'react';
import './Exchanges.css';
import { connect } from 'react-redux';
import { loadExchanges } from '../../actions';
import ExchangeRow from '../../components/ExchangeRow/ExchangeRow';


const Exchanges = ({exchanges, cryptoName, loadExchanges}) => {
  let allExchanges = exchanges.map(exchange => {
    return (
      <ExchangeRow key={exchange.id} exchange={exchange} />
    )
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    exchanges.sort((a, b) => a.price_usd - b.price_usd)
    loadExchanges(exchanges)
  }

  return (
    <div className='exchanges-display'>
      <div className='exchanges-heading'>
        <h1>TOP 50 EXCHANGES TRADING: {cryptoName}</h1>
        <form>
          <label htmlFor='exchanges-filter'>Sort By: </label>
          <select name='exchanges-filter'>
            <option value='$:H-L'>Price: High to Low</option>
            <option value='$:L-H'>Price: Low to High</option>
            <option value='V:H-L'>Volume: High to Low</option>
            <option value='V:L-H'>Volume: Low to High</option>
          </select>
          <button onClick={handleSubmit}>Go!</button>
        </form>
      </div>      
      <table>
        <thead>
          <tr>
            <th>Exchange Name</th>
            <th>Price</th>
            <th>Trade Volume(#million)</th>
            <th>Trade Volume($million)</th>
          </tr>
        </thead>
        <tbody>
          {allExchanges}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (state) => ({
  exchanges: state.exchanges,
  cryptoName: state.selected.name
})

const mapDispatchToProps = (dispatch) => ({
  loadExchanges: exchanges => dispatch( loadExchanges(exchanges) )
})

export default connect(mapStateToProps, mapDispatchToProps)(Exchanges);
