import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-input-range/lib/css/index.css';

import store from '../src/store';
import App from './components/App/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
