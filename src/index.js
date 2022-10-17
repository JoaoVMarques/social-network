import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Provider from './hooks/Providers/UserProvider';
import DataProvider from './hooks/Providers/DataProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider>
        <DataProvider>
          <App />
        </DataProvider>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
