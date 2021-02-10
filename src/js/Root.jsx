import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import axios from 'axios';
import createStore, {getHistory} from './store/store';
import App from './App';

export default class Root extends Component {
    state = {
        isLoading: true,
        spots: [],
    };

    componentDidMount() {
        this._loadSpots();
    }

    async _loadSpots() {
        try {
            const {data} = await axios.get('/spots');

            this.setState({
                isLoading: false,
                spots: data,
            });
        } catch (error) {
            console.log('Error loading spot data: ', error); // eslint-disable-line no-console
        }
    }

    render() {
        const {isLoading, spots} = this.state;

        if (isLoading) {
            return <div className="Root-loader">Loading...</div>;
        }

        return (
            <Provider store={createStore()}>
                <ConnectedRouter history={getHistory()}>
                    <App spots={spots} />
                </ConnectedRouter>
            </Provider>
        );
    }
}
