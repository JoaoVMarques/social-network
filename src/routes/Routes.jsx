import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';

function RoutesComponent() {
  return(
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/home" element={ <Home /> } />
    </Routes>
  );
}

export default RoutesComponent;
