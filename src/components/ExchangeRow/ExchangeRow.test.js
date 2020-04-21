import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import ExchangeRow from './ExchangeRow';

const testStore = createStore(rootReducer)
const mockExchange = {
  name: 'Lbank',
  base: 'BTC',
  quote: 'USDT',
  price: 6880.41,
  price_usd: 6880.41,
  volume: 222000,
  volume_usd: 1532000000,
  time: 1587428674,
}

describe('ExchangeRow', () => {
  it('should render the correct content', () => {
  const { getByText } = render(
    <Provider store={testStore}>
      <BrowserRouter>
        <table><tbody>
          <ExchangeRow exchange={mockExchange} />
        </tbody></table>
      </BrowserRouter>
    </Provider>
  )
  const exchangeName = getByText('Lbank');
  const exchangePrice = getByText('$6880.41000');
  const unitsVolume = getByText('0.222');
  const dollarVolume = getByText('$1,532');

  expect(exchangeName).toBeInTheDocument();
  expect(exchangePrice).toBeInTheDocument();
  expect(unitsVolume).toBeInTheDocument();
  expect(dollarVolume).toBeInTheDocument();
  })
})