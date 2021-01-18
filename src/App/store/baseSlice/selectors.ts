import path from 'ramda/src/path';
import { createSelector } from '@reduxjs/toolkit';
import { BaseInterface } from './types';

export const selectBase = createSelector<any, any, BaseInterface>(
  path<BaseInterface>(['base', 'data']),
  (base) => base
);
