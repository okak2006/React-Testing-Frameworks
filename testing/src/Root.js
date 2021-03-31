import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxPromise from 'redux-promise'

// by destructuring you can supply default value
// taking second parameter of initialState allows us to have initial state value
// if no initial value is supplied initialState = {}
export default ({ children, initialState = {} }) => {
    const store = createStore(reducers, initialState, applyMiddleware(reduxPromise))
    return (
        // second param of createStore is initial state
        <Provider store={store}>
            {children}
        </Provider>
    )
}