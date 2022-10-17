import React from 'react';
import PropTypes from 'prop-types';
import DataContext from '../context/DataContext';
import dataContents from '../../data/content';
import { useState } from 'react';

function DataProvider({ children }) {
  const [ usersContents, setUsersContents ] = useState(dataContents);

  function publishContent(textToPublish) {  
    const createdPost = {
      postId: usersContents.length +1,
      user: 'mainUser',
      content: textToPublish,
      hour: '00:00',
      date: '08/10/2022'
    };
    const newContent = [createdPost, ...usersContents];
    setUsersContents(newContent);
  }

  const contextValue = {
    usersContents,
    publishContent,
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