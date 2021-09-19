import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { api } from '../../../index.js';

export const getUserBooks = createAsyncThunk(
  'userBooks/getUserBooks',
  async () => {
    const response = await api.get('user_books', {
      include: 'books'
    });
    return response.data;
  }
);

export const addUserBook = createAsyncThunk(
  'userBooks/addUserBook',
  async ({bookId, shelfId}) => {
    const response = await api.post('user_books', {
      book: { type: 'books', id: bookId},
      shelf: [{ type: 'shelves', id: shelfId}]
    });
    return response.data;
  }
);

export const removeUserBook = createAsyncThunk(
  'userBooks/removeUserBook',
  async (bookId) => {
    const response = await api.delete('user_books', bookId);
    return bookId;
  }
);

export const rateBook = createAsyncThunk(
  'userBooks/rateBook',
  async ({ bookId, rating }) => {
    const response = await api.patch('user_books', {
      id: bookId,
      user_rating: rating
    });
    return response.data;
  }
);

const userBooksSlice = createSlice({
  name: 'userBooks',
  initialState: {
    books: [],
    isFetchingUserBooks: false
  },
  extraReducers: {
    [addUserBook.fulfilled](state, action) {
      state.books.push(action.payload);
    },
    [getUserBooks.pending](state) {
      state.isFetchingUserBooks = true;
    },
    [getUserBooks.fulfilled](state, action) {
      state.isFetchingUserBooks = false;
      state.books = action.payload;
    },
    [getUserBooks.rejected](state) {
      state.isFetchingUserBooks = false;
    },
    [removeUserBook.fulfilled](state, action) {
      state.books = state.books.filter(book => book.id !== action.payload);
    },
    [rateBook.fulfilled](state, action) {
    }
  }
});

export default userBooksSlice.reducer;