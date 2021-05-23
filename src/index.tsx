import 'nprogress/nprogress.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { SettingsProvider } from 'contexts/SettingsContext';
import App from './App';
import configStore from 'store/config.store';

import './styles/_main.scss';

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <SettingsProvider>
      <App />
    </SettingsProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
