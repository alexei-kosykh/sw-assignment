import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
import { compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({ reducer: rootReducer, composeEnhancers });

window.store = store;
