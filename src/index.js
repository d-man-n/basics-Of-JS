import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/app';
import configureStore from './store/configureStore';

import "./style.css";

let initialState;

if (localStorage.getItem('store')) {
    initialState = JSON.parse(localStorage.getItem('store'));
}
else {
    initialState = {}
    localStorage.setItem('store', JSON.stringify(initialState));
}

const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#app')
)