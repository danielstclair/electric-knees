import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import App from './components/App';
import reducers from './reducers';
import './styles/index.css';

const createStoreWithMiddleware = applyMiddleware(reduxThunk, createLogger())(createStore);

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
