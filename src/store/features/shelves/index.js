import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../../index.js';

export const getShelves = createAsyncThunk(
  'shelves/getShelves',
  async () => {
    const response = await api.get('shelves');
    return response.data;
  }
);

export const addShelf = createAsyncThunk(
  'shelves/addShelf',
  async (shelf) => {
    const response = await api.post('shelves', shelf);
    return response.data;
  }
);

const shelvesSlice = createSlice({
  name: 'shelves',
  initialState: { 
    shelves: [],
    isFetchingShelves: false,
    addingShelveError: null,
    selectedShelf: 'none'
  },
  reducers: {
    selectShelf(state, action) {
      state.selectedShelf = action.payload;
    }
  },
  extraReducers: {
    [addShelf.fulfilled](state, action) {
      console.log(action);
    },
    [getShelves.pending](state) {
      state.isFetchingShelves = true;
    },
    [getShelves.fulfilled](state, action) {
      state.isFetchingShelves = false;
      state.shelves = action.payload;
    },
    [getShelves.rejected](state) {
      state.isFetchingShelves = true;
    }
  }
});

export const { selectShelf } = shelvesSlice.actions;

export default shelvesSlice.reducer;