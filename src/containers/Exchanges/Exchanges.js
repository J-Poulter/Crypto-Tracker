import React from 'react';
import './Exchanges.css';
import { connect } from 'react-redux';
import { loadExchanges } from '../../actions';
import ExchangeRow from '../../components/ExchangeRow/ExchangeRow';


const Exchanges = ({exchanges, cryptoName, loadExchanges}) => {
  const allExchanges = exchanges.map(exchange => {
    return (
      <ExchangeRow key={exchanges.indexOf(exchange)} exchange={exchange} />
    )
  })
  
  const exchangeFilterOption = document.querySelector('.exchange-filter-option')

  const handleSubmit = (event, option) => {
    event.preventDefault()
    function determineSorter() {
    switch (option) {
      case '$:H-L':
        return exchanges.sort((a, b) => b.price_usd - a.price_usd)
      case '$:L-H':
        return exchanges.sort((a, b) => a.price_usd - b.price_usd)
      case 'V:H-L': 
        return exchanges.sort((a, b) => b.volume - a.volume)
      case 'V:L-H': 
        return exchanges.sort((a, b) => a.volume - b.volume)
      default: break
    }}
    loadExchanges(determineSorter())
  }

  return (
    <div className='exchanges-display'>
        <h1 className='page-title exchanges-title'>Top 50 Exchanges Trading: <span>{cryptoName}</span></h1>
      <div className='table-heading exchanges-heading'>
        <form className='exchanges-form'onSubmit={(event) => handleSubmit(event, exchangeFilterOption.value)}>
          <label htmlFor='exchanges-filter'>Sort By: </label>
          <select name='exchanges-filter' className='exchange-filter-option'>
            <option value='$:H-L'>Price: High to Low</option>
            <option value='$:L-H'>Price: Low to High</option>
            <option value='V:H-L'>Volume: High to Low</option>
            <option value='V:L-H'>Volume: Low to High</option>
          </select>
          <button className='submit-button' type='submit'>GO!</button>
        </form>
      </div>      
      <table>
        <thead>
          <tr>
            <th>EXCHANGE NAME</th>
            <th>PRICE</th>
            <th>TRADE VOLUME (#million units)</th>
            <th>TRADE VOLUME ($million)</th>
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
