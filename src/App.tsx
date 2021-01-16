import { hot } from 'react-hot-loader/root';
import React from 'react';
import 'typeface-roboto';
import GlobalStyle from './GlobalStyle';

const App = () => (
  <div style={{ fontFamily: 'Roboto', fontWeight: 300 }}>
    Test
    <GlobalStyle />
  </div>
);

export default hot(App);
