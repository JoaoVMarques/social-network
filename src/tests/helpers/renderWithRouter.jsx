import React from 'react';
import { render } from '@testing-library/react';
import Provider from '../../hooks/context/Provider';
import DataProvider from '../../hooks/data/DataProvider';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(
      <Router location={ history.location }>
        <Provider>
          <DataProvider>
            {component}
          </DataProvider>
        </Provider>
      </Router>),
    history,
  });
};

export default renderWithRouter;