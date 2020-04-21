import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import FavoriteCard from './FavoriteCard';

const testStore = createStore(rootReducer)
const mockFavorite = {
    id: "58",
    symbol: "XRP",
    name: "Ripple",
    price_usd: "0.192433",
    percent_change_24h: "0.17",
  }

describe('FavoriteCard', () => {
  it('should render the correct content', () => {
  const { getByText } = render(
    <Provider store={testStore}>
      <BrowserRouter>
        <FavoriteCard favorite={mockFavorite} />
      </BrowserRouter>
    </Provider>
  )
  const removeButton = getByText('X');
  const cardTitle = getByText('Ripple ()');
  const cardTickerSymbol = getByText('XRP');
  const cardPrice = getByText('Price: $0.192433');
  const priceChange = getByText('Price Movement (24H): +0.17%');
  const detailsButton = getByText('VIEW MORE');

  expect(removeButton).toBeInTheDocument();
  expect(cardTitle).toBeInTheDocument();
  expect(cardTickerSymbol).toBeInTheDocument();
  expect(cardPrice).toBeInTheDocument();
  expect(priceChange).toBeInTheDocument();
  expect(detailsButton).toBeInTheDocument();
  })
})