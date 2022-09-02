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

  const contextValue = {
    disableButton,
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