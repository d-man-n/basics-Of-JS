import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import photoState from '../reducers';

export default function configureStore(initialState) {
    return createStore(
        photoState,
        initialState,
        applyMiddleware(thunk)
    );
}