import React from 'react';
import PropTypes from 'prop-types';
import DataContext from '../context/DataContext';
import { useState } from 'react';
import { getPosts, publishPosts } from '../../services/fetchPosts';
import { useEffect } from 'react';

function DataProvider({ children }) {
  const [ usersContents, setUsersContents ] = useState([]);

  const fetchPosts = async () => {  
    const contents = await getPosts();
    setUsersContents(contents.message);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  

  async function publishContent(textToPublish) {
    const publishObject = {
      message: textToPublish
    };
    await publishPosts(publishObject);
    await fetchPosts();
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