import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import page from '../reducers/page';
import photos from '../reducers/photos';
import user from '../reducers/user';

const rootReducer = combineReducers({
    page,
    photos,
    user
  });

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}