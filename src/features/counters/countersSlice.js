import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: 1,
    value: 5,
  },
  {
    id: 2,
    value: 1,
  },
];
const countersSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increment: (state, action) => {
      const counter = state.find((obj) => obj.id === action.payload);
      if (counter) {
        counter.value++; // Directly mutate the object
      }
    },
    decrement: (state, action) => {
      const counter = state.find((obj) => obj.id === action.payload);
      if (counter) {
        counter.value--; // Directly mutate the object
      }
    },
  },
});

export default countersSlice.reducer;
export const { increment, decrement } = countersSlice.actions;
