import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const pizzaReducer = (state = [], action) => {
  if (action.type === "GET_PIZZAS") {
    return [...state, action.payload];
  } 
  return state;
}

const cartReducer = (state = [], action) => {
  if (action.type === "ADD_TO_CART") {
    return [...state, action.payload];
  } else if (action.type === "REMOVE_FROM_CART") {
    return state.filter(pizza => pizza.id !== action.payload);
  }
  return state;
}

const store = createStore(
  combineReducers({
    pizzas: pizzaReducer, // 👈 Be sure to replace this, too!
    cart: cartReducer
  }),
  applyMiddleware(logger),
);


export default store;
