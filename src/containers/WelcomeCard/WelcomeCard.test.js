import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import WelcomeCard from './WelcomeCard';
import { loadTopCryptos } from '../../actions';

const testStore = createStore(rootReducer);

describe('WelcomeCard', () => {
  it('should render the correct content', () => {
  const { getByText } = render(
    <Provider store={testStore}>
      <BrowserRouter>
        <WelcomeCard />
      </BrowserRouter>
    </Provider>
  )
  const pageTitle = getByText('Welcome Trader!');
  const subTitle = getByText('Here\'s a brief overview of the cryptocurrency market:');
  const totalCryptos = getByText('Total Cryptocurrencies: 0');
  const totalMarkets = getByText('Total Active Exchange Markets: 0');
  const btcDominance = getByText('Bitcoin Market Dominance: %');
  const loadTopButton = getByText('BINANCE TOP 100 CRYPTOS');
  expect(pageTitle).toBeInTheDocument();
  expect(subTitle).toBeInTheDocument();
  expect(totalCryptos).toBeInTheDocument();
  expect(totalMarkets).toBeInTheDocument();
  expect(btcDominance).toBeInTheDocument();
  expect(loadTopButton).toBeInTheDocument();
})
})