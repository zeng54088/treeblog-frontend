import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import BackLogin from './components/login/BackLogin';

ReactDOM.render(<BackLogin />, document.getElementById('root'));
serviceWorker.unregister();
