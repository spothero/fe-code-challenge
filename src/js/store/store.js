import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
const history = createBrowserHistory();
let store;

export default function create(initialState) {
    store = createStore(
        reducers(history),
        initialState,
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history),
                thunkMiddleware,
                promiseMiddleware,
            )
        )
    );

    return store;
}

export const getStore = () => {
    return store;
};

export const getHistory = () => {
    return history;
};
