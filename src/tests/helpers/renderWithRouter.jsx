import React from 'react';
import { render } from '@testing-library/react';
import Provider from '../../hooks/context/Provider';
import DataProvider from '../../hooks/data/DataProvider';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(
      <MemoryRouter>
        <Provider>
          <DataProvider>
            {component}
          </DataProvider>
        </Provider>
      </MemoryRouter>),
    history,
  });
};

export default renderWithRouter;