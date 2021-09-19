import { api } from '../../../index.js';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const postRequest = async (path, data) => {
  try {
    const response = await fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const x = await response.json();
    return x;
  } catch (error) {
    console.error(error);
  }
}

const authenticate = (response) => {
  if (!response.error) {
    sessionStorage.setItem('token', response.auth_token);
    sessionStorage.setItem('user', JSON.stringify(response.user));
    api.headers['Authorization'] = response.auth_token;
  }
}

export const authenticateUser = createAsyncThunk(
  'users/authenticateUser',
  async (user) => {
    const response = await postRequest('http://localhost:3001/authenticate', user);
    authenticate(response);
    return response.user;
  }
);

export const registerUser = createAsyncThunk(
  'users/registerUser',
  async (user) => {
    const response = await postRequest('http://localhost:3001/register', user);
    authenticate(response);
    return response.user;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    currentUser: null,
    isLoginFormLoading: false,
    isRegistrationFormLoading: false,
    registrationFormError: null,
    loginFormError: null
  },
  reducers: {
    loadUserDate(state, action) {
      state.currentUser = action.payload;
    }
  },
  extraReducers: {
    [authenticateUser.pending](state) {
      state.isLoginFormLoading = true;
      state.loginFormError = false;
      state.registrationFormError = false;
    },
    [authenticateUser.fulfilled](state, action) {
      state.currentUser = action.payload;
      state.isLoginFormLoading = false;
      state.isRegistrationFormLoading = false;
      state.loginFormError = false;
      state.registrationFormError = false;
    },
    [authenticateUser.rejected](state, action) {
      state.loginFormError = action.payload;
      state.isLoginFormLoading = false;
    },
    [registerUser.pending](state) {
      state.isRegistrationFormLoading = true;
      state.loginFormError = false;
      state.registrationFormError = false;
    },
    [registerUser.fulfilled](state, action) {
      state.currentUser = action.payload;
      state.isLoginFormLoading = false;
      state.isRegistrationFormLoading = false;
      state.loginFormError = false;
      state.registrationFormError = false;
    },
    [registerUser.rejected](state, action) {
      state.registrationFormError = action.payload;
      state.isRegistrationFormLoading = false;
    }
  }
});

export const { loadUserDate } = usersSlice.actions;

export default usersSlice.reducer;