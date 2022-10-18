import React from 'react';
import PropTypes from 'prop-types';
import DataContext from '../context/DataContext';
import { useState } from 'react';
import { getPosts, publishPosts } from '../../services/fetchPosts';
import { useEffect } from 'react';

function DataProvider({ children }) {
  const [ usersContents, setUsersContents ] = useState([]);
  const [ refresh, setRefresh ] = useState(false);

  const fetchPosts = async () => {  
    const contents = await getPosts();
    setUsersContents(contents.message);
  };

  useEffect(() => {
    fetchPosts();
    setRefresh(false);
  }, [refresh]);
  

  async function publishContent(textToPublish) {
    const publishObject = {
      message: textToPublish
    };
    await publishPosts(publishObject);
    setRefresh(true);
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