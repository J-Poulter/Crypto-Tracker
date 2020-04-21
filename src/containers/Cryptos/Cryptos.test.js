import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import Cryptos from './Cryptos';

const testStore = createStore(rootReducer);

describe('Cryptos', () => {
  it('should render the correct content', () => {
  const { getByText, getAllByRole } = render(
    <Provider store={testStore}>
      <BrowserRouter>
        <Cryptos />
      </BrowserRouter>
    </Provider>
  )
  const dropdownOptions = getAllByRole('option');
  const cryptosTitle = getByText('BINANCE TOP CRYPTOS');
  const sortLabel = getByText('Sort By:');
  const submitButton = getByText('GO!');
  const updateInstruct = getByText('(to update prices/information, click top 100 button in the header)');
  const th1 = getByText('RANK');
  const th2 = getByText('NAME');
  const th3 = getByText('TICKER');
  const th4 = getByText('PRICE');
  const th5 = getByText('PRICE MOVEMENT (1H)');
  const th6 = getByText('PRICE MOVEMENT (24H)');
  const th7 = getByText('PRICE MOVEMENT (7D)');

  expect(dropdownOptions).toHaveLength(8)
  expect(cryptosTitle).toBeInTheDocument();
  expect(sortLabel).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
  expect(updateInstruct).toBeInTheDocument();
  expect(th1).toBeInTheDocument();
  expect(th2).toBeInTheDocument();
  expect(th3).toBeInTheDocument();
  expect(th4).toBeInTheDocument();
  expect(th5).toBeInTheDocument();
  expect(th6).toBeInTheDocument();
  expect(th7).toBeInTheDocument();
  })
})