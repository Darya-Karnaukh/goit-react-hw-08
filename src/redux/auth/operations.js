import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiContact, clearToken, setToken } from "../../config/apiContact";

export const registerThunk = createAsyncThunk(
  "register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await apiContact.post(`users/signup`, credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await apiContact.post(`users/login`, credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk("logout", async (_, thunkAPI) => {
  try {
    await apiContact.post(`users/logout`);
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const currentThunk = createAsyncThunk("current", async (_, thunkAPI) => {
  const savedToken = thunkAPI.getState().auth.token;
  if (savedToken === null) {
    return thunkAPI.rejectWithValue("Token is not exist!");
  }
  try {
    setToken(savedToken);
    const { data } = await apiContact.get(`users/current`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
