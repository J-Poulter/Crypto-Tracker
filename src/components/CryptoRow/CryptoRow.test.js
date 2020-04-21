import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import CryptoRow from './CryptoRow';

const testStore = createStore(rootReducer);
const mockCrypto = {
  id: "90",
  symbol: "BTC",
  name: "Bitcoin",
  nameid: "bitcoin",
  rank: 1,
  price_usd: "6854.84",
  percent_change_24h: "-3.84",
  percent_change_1h: "-0.41",
  percent_change_7d: "0.66",
  price_btc: "1.00",
  market_cap_usd: "125314404928.38",
  volume24: 28305973081.974674,
  volume24a: 22343621758.040264,
  csupply: "18281159.00",
  tsupply: "18281159",
  msupply: "21000000",
}

describe('CryptoRow', () => {
  it('should render the correct content', () => {
    const { getByText } = render(
      <Provider store={testStore}>
        <BrowserRouter>
          <table><tbody>
          <CryptoRow crypto={mockCrypto} />
          </tbody></table>
        </BrowserRouter>
      </Provider>
    )
    const rank = getByText('1');
    const cryptoName = getByText('Bitcoin');
    const symbol = getByText('BTC');
    const dollarPrice = getByText('$6854.84');
    const percentChange24h = getByText('-3.84%');
    const percentChange1h = getByText('-0.41%');
    const percentChange7d = getByText('+0.66%');
    const viewMoreButton = getByText('VIEW DETAILS');

    expect(rank).toBeInTheDocument();
    expect(cryptoName).toBeInTheDocument();
    expect(symbol).toBeInTheDocument();
    expect(dollarPrice).toBeInTheDocument();
    expect(percentChange24h).toBeInTheDocument();
    expect(percentChange1h).toBeInTheDocument();
    expect(percentChange7d).toBeInTheDocument();
    expect(viewMoreButton).toBeInTheDocument();
  })
})