import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import JssProvider from 'react-jss/lib/JssProvider';
import merge from 'lodash/merge';
import {
  MuiThemeProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import treasuryTheme from 'theme/treasury';
import Button from 'components/predefined/Button';
import Icon from 'components/predefined/Icon';
import Typography from 'components/predefined/Typography';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const generateClassName = createGenerateClassName({
  productionPrefix: 'MuiTreasury',
});

const render = Component => {
  ReactDOM.render(
    <JssProvider generateClassName={generateClassName}>
      <MuiThemeProvider
        theme={merge(treasuryTheme, {
          overrides: {
            ...Button.getTheme(treasuryTheme),
            ...Icon.getTheme(treasuryTheme),
            ...Typography.getTheme(treasuryTheme),
          },
        })}
      >
        <ThemeProvider theme={treasuryTheme}>
          <Router>
            <Component />
          </Router>
        </ThemeProvider>
      </MuiThemeProvider>
    </JssProvider>,
    document.getElementById('root'),
  );
};

// Render once
render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
