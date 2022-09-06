import React from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

function Provider({ children }) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  function registerEmail(value) {
    if(value) {
      const result = value.toLowerCase().match(
        emailRegex
      );
      return result ? false : 'O email é inválido';
    }
    return 'É necessário ter um email.';
  }

  function registerUser(value) {
    if(value) {
      return false;
    }
    return 'É necessário ter um nome de úsuario.';
  }

  function registerPassword(value) {
    if(value) {
      const result = value.toLowerCase().match(
        passwordRegex
      );
      return result ? false 
        : 'A senha precisa ter no minimo 8 caracteres e no minimo 1 letra e 1 número';

    }
    return 'Insira uma senha.';
  }

  function registerInputValidade(name, value) {
    if (name === 'email') {
      return registerEmail(value);
    } else if (name === 'user') {
      return registerUser(value);
    } else if (name === 'password') {
      return registerPassword(value);
    }
  }

  const contextValue = {
    registerInputValidade,
  };

  return (
    <UserContext.Provider value={ contextValue }>
      {children}
    </UserContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.func,
}.isRequired;

export default Provider;