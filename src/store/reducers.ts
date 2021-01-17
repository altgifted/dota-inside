import { combineReducers } from '@reduxjs/toolkit';
import base from './baseSlice/baseSlice';

const rootReducer = combineReducers({
  base
});

export default rootReducer;
