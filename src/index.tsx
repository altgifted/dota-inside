import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { setConfig } from 'react-hot-loader';
import App from './App/App';
import store from './App/store/store';
import i18n from './i18n';
import 'typeface-roboto-multilang/cyrillic.css';
import 'typeface-roboto-multilang/index.css';

setConfig({
  reloadHooks: false
});

render(
  <BrowserRouter basename="/">
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
