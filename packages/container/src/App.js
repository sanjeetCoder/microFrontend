import React from 'react';
// import { mount } from 'marketing/MarketingApp';
import { BrowserRouter } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import MarketingApp from '../components/MarketingApp';
import AuthApp from '../components/AuthApp';
import Header from '../components/Header';

// To avoid css collisions
const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});
export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <hr />
          <MarketingApp />
          <hr />
          <AuthApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
