import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './i18n';
import store from './redux/store';
import App from './modules/App';
// import * as serviceWorker from './serviceWorker';
import './styles/application.scss';

ReactDOM.render(
  <Provider store={store}><App /></Provider>, document.getElementById('root'));
// serviceWorker.unregister();
