import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app';
import store from './redux/store';
import './index.scss';

const root = document.getElementById('root');

createRoot(root).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
