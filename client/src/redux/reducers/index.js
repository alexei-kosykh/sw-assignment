import { combineReducers } from 'redux';
import { filters } from './filters';
import { currency } from './currency';
import { products } from './products';
import { cart } from './cart';

export const rootReducer = combineReducers({
  filters: filters,
  products: products,
  cart: cart,
  currency: currency,
});
