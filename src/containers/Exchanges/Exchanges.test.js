import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import Exchanges from './Exchanges';

const testStore = createStore(rootReducer);

describe('Exchanges', () => {
  it('should render the correct content', () => {
  const { getByText, getAllByRole } = render(
    <Provider store={testStore}>
      <BrowserRouter>
        <Exchanges />
      </BrowserRouter>
    </Provider>
  )
  const pageTitle = getByText('Top 50 Exchanges Trading:')
  const dropdownOptions = getAllByRole('option');
  const sortLabel = getByText('Sort By:');
  const submitButton = getByText('GO!');
  const th1 = getByText('EXCHANGE NAME')
  const th2 = getByText('PRICE')
  const th3 = getByText('TRADE VOLUME (#million units)')
  const th4 = getByText('TRADE VOLUME ($million)')

  expect(pageTitle).toBeInTheDocument();
  expect(dropdownOptions).toHaveLength(4);
  expect(sortLabel).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
  expect(th1).toBeInTheDocument();
  expect(th2).toBeInTheDocument();
  expect(th3).toBeInTheDocument();
  expect(th4).toBeInTheDocument();
  })
})