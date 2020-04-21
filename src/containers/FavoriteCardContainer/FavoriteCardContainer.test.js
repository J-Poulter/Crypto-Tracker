import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import FavoriteCardContainer from './FavoriteCardContainer';

const testStore = createStore(rootReducer);

describe('FavoriteCardContainer', () => {
  it('should render the correct content', () => {
    const { getByText } = render(
      <Provider store={testStore}>
        <BrowserRouter>
          <FavoriteCardContainer />
        </BrowserRouter>
      </Provider>
    )
    const favoritesHeader = getByText('Your Favorite Cryptos:');    

    expect(favoritesHeader).toBeInTheDocument();
  })
})