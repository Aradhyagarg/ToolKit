import { createSlice } from "@reduxjs/toolkit";

const customSlice = createSlice({
  name: "custom",
  initialState: {
    c: 0,
  },
  reducers: {
    increment: (state) => {
      state.c += 1;
    },
    incrementByValue: (state, action) => {
      state.c += action.payload;
    },
    decrement: (state) => {
      state.c -= 1;
    },
  },
});

export const { increment, incrementByValue, decrement } = customSlice.actions;
export const customReducer = customSlice.reducer;
