import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';

import thunk from 'redux-thunk';
/*
Redux middleware that spits an error on you when you try to mutate your state 
either inside a dispatch or between dispatches. For development use only!
*/
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, applyMiddleware(thunk, reduxImmutableStateInvariant()));
}