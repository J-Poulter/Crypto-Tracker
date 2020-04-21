import React from 'react';
import { render, waitFor, fireEvent, getAllByRole } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import { getMarketInfo, getCryptos, getCoinDetails, getExchanges, getSocialStats } from '../../apiCalls';
import App from './App';

const renderTestWrapper = () => {
  getMarketInfo.mockResolvedValue({marketInfo: mockMarketInfo})
  const testStore = createStore(rootReducer);
  localStorage.setItem('favorites', JSON.stringify(mockFavorites))

  return render(
    <Provider store={testStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
}

jest.mock('../../apicalls');

const mockMarketInfo = {
  coins_count: 40,
  active_markets: 1600,
  total_mcap: 190000000,
  total_volume:180000000,
  btc_d: "65",
  eth_d: "10",
  mcap_change: "-4",
  volume_change: "17",
  avg_change_percent: "-1.05",
  volume_ath: 10000000,
  mcap_ath: 10000000
}

const mockFavorites = [
  {
    id: "58",
    symbol: "XRP",
    name: "XRP",
    price_usd: "0.192433",
    percent_change_24h: "0.17",
  }
]

const mockSelectedCrypto = {
  id: 1,
  name: 'Bitcoin',
  symbol: 'BTC',
  rank: 1,
  price_usd: '7000',
  price_btc: '1',
  percent_change_1h: '-3.8',
  percent_change_24h: '-2',
  percent_change_7d: '-3',
  market_cap_usd: '5000000',
  tsupply: '17000000',
  msupply: '21000000'
}


const setAddressStartingPoint = (address) => {
  const history = createMemoryHistory();
  history.push(address);
}



describe('App', () => {
  it('should render the starting page', async () => {
    const { getByText, debug, getAllByRole} = renderTestWrapper();
    const headerTitle = getByText('Crypto-Tracker')
    const headerButtons = getAllByRole('button')
    const cardTitle = getByText('Welcome Trader!')

  })
})
