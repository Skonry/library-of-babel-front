import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Kitsu from 'kitsu';
import App from './App';
import store from './store';
import { loadUserDate } from './store/features/users';

export const api = new Kitsu({
  baseURL: 'http://localhost:3001',
  headers: {
    Authorization: sessionStorage.getItem('token')
  },
  camelCaseTypes: false
});

store.dispatch(loadUserDate(JSON.parse(sessionStorage.getItem('user'))));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);