import axios from 'axios';
import {Provider} from 'react-redux';
import {ChakraProvider} from '@chakra-ui/react';
import React, {useState, useEffect} from 'react';
import {ConnectedRouter} from 'connected-react-router';

import App from './App';
import createStore, {getHistory} from './store/store';

import theme from '../theme';

const loadSpots = async () => {
    try {
        const {
            data
        } = await axios.get('/spots');

        return data;
    } catch (error) {
        console.log('Error loading spot data: ', error); // eslint-disable-line no-console
    }
};

const Root = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        loadSpots().then(data => {
            setSpots(data);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return (
            <div className="Root-loader">
                Loading...
            </div>
        );
    }

    return (
        <Provider store={createStore()}>
            <ConnectedRouter history={getHistory()}>
                <ChakraProvider theme={theme}>
                    <App spots={spots} />
                </ChakraProvider>
            </ConnectedRouter>
        </Provider>
    );
};

export default Root;
