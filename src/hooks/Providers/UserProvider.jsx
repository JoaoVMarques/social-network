import React from 'react';
import PropTypes from 'prop-types';
import UserContext from '../context/UserContext';

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
        : 'A senha precisa ter no minimo 8 caracteres, 1 letra e 1 número';

    }
    return 'Insira uma senha.';
  }

  function registerInputValidate(name, value) {
    if (name === 'email') {
      return registerEmail(value);
    } else if (name === 'username') {
      return registerUser(value);
    } else if (name === 'password') {
      return registerPassword(value);
    }
  }

  function loginInputValidate(email, password) {
    if(password && password) {
      
    }
    return true;
  }

  const contextValue = {
    registerInputValidate,
    loginInputValidate,
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