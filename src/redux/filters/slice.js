import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: {
    name: "",
    number: "",
  },
};

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterContacts: (state, action) => {
      state.filter.name = action.payload;
    },
    filterNumberContacts: (state, action) => {
      state.filter.number = action.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { filterContacts, filterNumberContacts } = slice.actions;
