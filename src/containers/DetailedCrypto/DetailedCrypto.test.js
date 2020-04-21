import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import DetailedCrypto from './DetailedCrypto';

const testStore = createStore(rootReducer)


describe('DetailedCrypto', () => {
  it('should render the correct content', () => {
  const { getByText } = render(
    <Provider store={testStore}>
      <BrowserRouter>
        <DetailedCrypto />
      </BrowserRouter>
    </Provider>
  )
  const pageTitle = getByText('Crypto Statistics');
  const favButton = getByText('Add To Favorites');
  const leftTitle = getByText('Performance Stats:');
  const rank = getByText('Rank:');
  const price = getByText('$');
  const btcPrice = getByText('Price(BTC): 0');
    const mCap = getByText('Market Cap (thousands): $Not Available');
  const rightTitle = getByText('Social Stats:');
  const redditSubs = getByText('Sub-Reddit Subscribers: Not Available');
  const twitterFollowers = getByText('Twitter Followers: Not Available');

  expect(pageTitle).toBeInTheDocument();
  expect(favButton).toBeInTheDocument();
  expect(leftTitle).toBeInTheDocument();
  expect(rank).toBeInTheDocument();
  expect(price).toBeInTheDocument();
  expect(btcPrice).toBeInTheDocument();
  expect(mCap).toBeInTheDocument();
  expect(rightTitle).toBeInTheDocument();
  expect(redditSubs).toBeInTheDocument();
  expect(twitterFollowers).toBeInTheDocument();
  })
})