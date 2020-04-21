import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';

const testStore = createStore(rootReducer);
function renderHeader() {
  return render(
    <Provider store={testStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  )
}

describe('Header', () => {
  it('should render the correct content', () => {
    const { getByText, getByAltText } = renderHeader();

    const logo = getByAltText('Crypto Tracker logo');
    const headerTitle = getByText('Crypto-Tracker');
    const homeButton = getByText('HOME');
    const topButton = getByText('TOP 100');
    const favoritesButton = getByText('FAVORITES(0)');

    expect(logo).toBeInTheDocument();
    expect(headerTitle).toBeInTheDocument();
    expect(homeButton).toBeInTheDocument();
    expect(topButton).toBeInTheDocument();
    expect(favoritesButton).toBeInTheDocument();
  })

  it('should redirect the pages address when clicking on buttons in the header', () => {
    const { getByText, getByAltText } = renderHeader();

    const logo = getByAltText('Crypto Tracker logo');
    const homeButton = getByText('HOME');
    const topButton = getByText('TOP 100');
    const favoritesButton = getByText('FAVORITES(0)');

    expect(location.pathname).toBe('/');
    
    fireEvent.click(topButton);
    expect(location.pathname).toBe('/cryptos');

    fireEvent.click(logo);
    expect(location.pathname).toBe('/');

    fireEvent.click(favoritesButton);
    expect(location.pathname).toBe('/favorites');
    
    fireEvent.click(homeButton);
    expect(location.pathname).toBe('/');    
  })
})