import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from '../../frontend/src/pages/cocktail/context/Context';
import { DataProvider } from '../../frontend/src/pages/cart/context/Context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <AppProvider>
          <DataProvider>
            <App />
          </DataProvider>
        </AppProvider>
      </BrowserRouter>
  </React.StrictMode>
);


