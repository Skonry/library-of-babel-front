import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import 'antd/dist/antd.css'

import usersReducer from './features/users';
import userBooksReducer from './features/userBooks';
import shelvesReducer from './features/shelves';
import booksReducer from './features/books';
import reviewsReducer from './features/reviews';

const rootReducer = combineReducers({
  books: booksReducer,
  users: usersReducer,
  userBooks: userBooksReducer,
  shelves: shelvesReducer,
  reviews: reviewsReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;