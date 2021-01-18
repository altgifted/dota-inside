import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    a: null,
    b: false
  }
};

const baseSlice = createSlice({
  name: '@base',
  initialState,
  reducers: {
    addBaseA(state, action) {
      state.data.a = action.payload;
    }
  }
});

export const {
  addBaseA
} = baseSlice.actions;

export default baseSlice.reducer;
