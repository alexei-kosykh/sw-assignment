import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
import { compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  composeEnhancers,
});

window.store = store;
