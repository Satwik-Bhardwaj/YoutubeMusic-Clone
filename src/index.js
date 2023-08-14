import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppStateContextProvider from './AppStateContext/AppStateContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppStateContextProvider>
    <React.StrictMode>
      <Router>
        <AppStateContextProvider>
          <App />
        </AppStateContextProvider>
      </Router>
    </React.StrictMode>
  </AppStateContextProvider>
);

reportWebVitals();
