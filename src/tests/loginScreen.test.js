import { screen } from '@testing-library/react';
import App from '../App';
import React from 'react';
import renderWithRouter from './helpers/renderWithRouter';
import Login from '../pages/Login';
import userEvent from '@testing-library/user-event';

describe('Página de login', function () {
  describe('Testando título', function() {
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
  
  describe('Testando login', function () {
    it('Testa se não é possivel entrar na página sem estar logado', function() {
      const { history } = renderWithRouter(<Login />);
      const { location } = history;
      let invalidText = screen.queryByText(/email ou senha invalidos/i);
      const button = screen.getByRole('button', {
        name: /entrar/i
      });
      expect(invalidText).toBeNull();
      expect(button).toBeInTheDocument();
      userEvent.click(button);

      invalidText = screen.queryByText(/email ou senha invalidos/i);
      expect(location.pathname).toBe('/');
      expect(invalidText).toBeInTheDocument();
    });

    it('é possivel criar uma conta e se logar', function() {
      renderWithRouter(<App />);
      const createAccountButton = screen.getByRole('button', {
        name: /criar conta/i
      });
      expect(createAccountButton).toBeInTheDocument;
      userEvent.click(createAccountButton);
      const emailInput = screen.getAllByPlaceholderText(/Endereço de email/i)[1];
      const userNameInput = screen.getAllByPlaceholderText('nomeDeUsuario')[0];
      const passwordInput = screen.getAllByPlaceholderText('Senha')[1];
      const registerButton = screen.getByRole('button', {
        name: /cadastrar-se/i
      });
      const email = 'teste@test.com';
      const password = 'teste123';

      expect(emailInput).toBeInTheDocument();
      expect(userNameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(registerButton).toBeInTheDocument();

      userEvent.type(emailInput, email);
      userEvent.type(userNameInput, 'testeUser');
      userEvent.type(passwordInput, password);
      userEvent.click(registerButton);

      const emailLoginInput = screen.getByRole('textbox', {
        name: /email/i
      });
      const passwordLoginInput = screen.getByLabelText(/senha/i);

      expect(emailLoginInput).toBeInTheDocument();
      expect(passwordLoginInput).toBeInTheDocument();
      const loginButton = screen.getByRole('button', {
        name: /entrar/i
      });

      userEvent.type(emailLoginInput, email);
      userEvent.type(passwordLoginInput, password);
      expect(loginButton).toBeInTheDocument();
      userEvent.click(loginButton);

      const homeTitle = screen.getByRole('heading', {
        name: /página inicial/i
      });
      expect(homeTitle).toBeInTheDocument();
    });
  });
});
