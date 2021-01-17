import { hot } from 'react-hot-loader/root';
import { setConfig } from 'react-hot-loader';
import React from 'react';
import 'typeface-roboto';
import GlobalStyle from './GlobalStyle';

setConfig({
  reloadHooks: false
});

const App = () => (
  <div style={{ fontFamily: 'Roboto', fontWeight: 300 }}>
    Test
    <GlobalStyle />
  </div>
);

export default hot(App);
