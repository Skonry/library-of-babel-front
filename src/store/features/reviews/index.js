import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../../index.js';

export const getBookReviews = createAsyncThunk(
  'reviews/getBookReviews',
  async (bookId) => {
    const response = await api.get('reviews', {
      filter: {
        book: bookId
      }
    });
    return response.data;
  }
);

export const getUserReviews = createAsyncThunk(
  'reviews/getUserReviews',
  async (userId) => {
    const response = await api.get('reviews', {
      filter: {
        user: userId
      }
    });
    return response.data;
  }
);

export const addReview = createAsyncThunk(
  'reviews/addReview',
  async ({ bookId,  review }) => {
    console.log(review);
    const response = await api.post('reviews', {
      ...review,
      book: { type: 'books', id: bookId }
    });
    return response.data;
  }
);

export const editReviewContent = createAsyncThunk(
  'reviews/editReview',
  async ({ content, reviewId }) => {
    const response = await api.patch('reviews', {
      id: reviewId,
      content
    });
    return response.data;
  }
);

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: { 
    userReviews: [],
    bookReviews: []
  },
  extraReducers: {
    [getBookReviews.fulfilled](state, action) {
      state.bookReviews = action.payload;
    },
    [getUserReviews.fulfilled](state, action) {
      state.userReviews = action.payload; 
    },
    [addReview.fulfilled](state, action) {
      state.userReviews.push(action.payload);
    },
    [editReviewContent.fulfilled](state, action) {
      state.userReviews = state.userReviews.map(review => {
        if (review.id === action.payload.id) {
          console.log(action.payload);
          return action.payload;
        }
        return review
      });
      
    }
  }
});

export default reviewsSlice.reducer;