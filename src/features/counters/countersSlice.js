import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];
const countersSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.map((obj) => {
        if (obj.id === action.payload) {
          obj.value++;
        }
      });
    },
    decrement: (state, action) => {
      state.map((obj) => {
        if (obj.id === action.payload) {
          obj.value--;
        }
      });
    },
  },
});

export default countersSlice.reducer;
export const { increment, decrement } = countersSlice.actions;
