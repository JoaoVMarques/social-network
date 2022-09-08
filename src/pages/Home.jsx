import React from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';

function Home() {
  return(
    <>
      <Header pageName={ 'Página Inicial' } />
      <MainContent />
    </>
  );
}

export default Home;
