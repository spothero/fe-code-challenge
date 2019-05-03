import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import Root from './Root';

axios.defaults.baseURL = 'http://localhost:8000/api';

render(<Root />, document.querySelector('.root'));
