import 'transitionEnd';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

import Root from './js/Root';

axios.defaults.baseURL = 'http://localhost:8001/api';

ReactDOM.render(<Root />, document.querySelector('.root'));
