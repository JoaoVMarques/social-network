import { screen } from '@testing-library/react';
import React from 'react';
import renderWithRouter from './helpers/renderWithRouter';
import Login from '../pages/Login';

describe('Testa a página de login', function() {
  it('testa se a página está sendo renderizada no URL "/"', function() {
    const { history } = renderWithRouter(<Login />);
    const { location } = history;
    expect(location.pathname).toBe('/');

    const title = screen.getByRole('heading', {
      name: /marques networking/i
    });
    expect(title).toBeInTheDocument();
  });
});
