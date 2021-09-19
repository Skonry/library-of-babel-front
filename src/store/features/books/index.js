import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../../index.js';

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async () => {
    const response = await api.get('books');
    return response.data;
  }
);

export const getBook = createAsyncThunk(
  'books/getBook',
  async (bookId) => {
    const response = await api.get(`books/${bookId}`);
    return response.data;
  }
);

export const addNewBook = createAsyncThunk(
  'books/addNewBook',
  async (book) => {
    console.log(book);
    const response = await api.post('books', book);
    return response.data;
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    book: {},
    isAddBookFormLoading: false,
    areBooksLoading: false,
  },
  extraReducers: {
    [addNewBook.pending](state) {
      state.isAddBookFormLoading = true;
    },
    [addNewBook.fulfilled](state) {
      state.isAddBookFormLoading = false;
    },
    [addNewBook.rejected](state) {
      state.isAddBookFormLoading = false;
    },
    [getBook.fulfilled](state, action) {
      state.book = action.payload;
    },
    [getBooks.pending](state) {
      state.areBooksLoading = true;
    },
    [getBooks.fulfilled](state, action) {
      state.areBooksLoading = false;
      state.books = action.payload;
    },
    [getBooks.rejected](state) {
      state.areBooksLoading = false;
    }
  }
});

export default booksSlice.reducer;