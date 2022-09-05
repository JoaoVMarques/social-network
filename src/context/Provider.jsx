import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

function Provider({ children }) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const [verifiedPass, setVerifiedPass] = useState(false);
  const [verifiedEmail, setVerifiedEmail] = useState(false);
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    setDisableButton( verifiedPass && verifiedEmail ? false : true );
  }, [verifiedPass, verifiedEmail]);

  function verifyInput({ target }) {
    const { value, name } = target;
    if (name === 'email') {
      setInput(value, emailRegex, setVerifiedEmail);
    } else {
      setInput(value, passwordRegex, setVerifiedPass);
    }
  }

  function setInput(value , regex, setVerified) {
    const result = value.toLowerCase().match(
      regex
    );
    setVerified(result ? true : false);
  }

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
    disableButton,
    registerInputValidade,
    verifyInput,
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