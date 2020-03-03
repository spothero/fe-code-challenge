import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'transitionEnd';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Root from './js/Root';

axios.defaults.baseURL = 'http://localhost:8001/api';

ReactDOM.render(<Root />, document.querySelector('.root'));
