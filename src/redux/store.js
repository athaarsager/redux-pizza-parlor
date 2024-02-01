import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// for displaying all the pizzas
const pizzaReducer = (state = [], action) => {
  if (action.type === "GET_PIZZAS") {
    return action.payload;
  } 
  return state;
}

// cart-related activities
const cartReducer = (state = [], action) => {
  if (action.type === "ADD_TO_CART") {
    return [...state, action.payload];
  } else if (action.type === "REMOVE_FROM_CART") {
    return state.filter(pizza => pizza.id !== action.payload);
  }
  return state;
}

// this fires when someone hits "checkout." Adds order to admin page
const orderReducer = (state = [], action) => {
  if (action.type === "ADD_TO_ORDERS") {
    return [...state, action.payload];
  }
  return state;
}

const store = createStore(
  combineReducers({
    pizzas: pizzaReducer, // 👈 Be sure to replace this, too!
    cart: cartReducer,
    orders: orderReducer
  }),
  applyMiddleware(logger),
);


export default store;
