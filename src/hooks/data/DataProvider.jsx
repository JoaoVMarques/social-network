import React from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';
import usersContents from '../../data/content';

function DataProvider({ children }) {

  const contextValue = {
    usersContents
  };

  return (
    <DataContext.Provider value={ contextValue }>
      {children}
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.func,
}.isRequired;


export default DataProvider;