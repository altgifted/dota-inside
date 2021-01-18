import { hot } from 'react-hot-loader/root';
import React from 'react';
import { useTranslation } from 'react-i18next/hooks';
import { Helmet } from 'react-helmet';
import GlobalStyle from '../GlobalStyle';

const App = () => {
  const [t] = useTranslation(['common']);
  return (
    <div style={{ fontFamily: 'Roboto', fontWeight: 300 }}>
      <Helmet>
        <title>{t('title')}</title>
      </Helmet>
      <GlobalStyle />
    </div>
  );
};

export default hot(App);
