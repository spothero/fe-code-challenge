import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import spot from '../spot/spot-reducer';

export default history =>
    combineReducers({
        spot,
        router: connectRouter(history),
    });
