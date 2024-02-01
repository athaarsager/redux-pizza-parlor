import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// for displaying all the pizzas
const pizzaReducer = (state = [], action) => {
  if (action.type === "GET_PIZZAS") {
    return action.payload;
  } 
  return state;
}

const totalPriceReducer = (state = 0, action) => {
  if (action.type === "ADD_TO_CART") {
    return state + action.payload.price;
  } else if (action.type === "REMOVE_FROM_CART") {
    return state - action.payload.price;
  } else if (action.type === "CLEAR_CART") {
    return 0;
  }
  return state;
}

// cart-related activities
const cartReducer = (state = [], action) => {
  if (action.type === "ADD_TO_CART") {
    return [...state, action.payload];
  } else if (action.type === "REMOVE_FROM_CART") {
    return state.filter(pizza => pizza.id !== action.payload);
  } else if (action.type === "CLEAR_CART") {
    return [];
  }
  return state;
}

const userReducer = (state = {}, action) => {
  if (action.type === "ADD_CURRENT_USER") {
    return action.payload;
  } else if (action.type === "CLEAR_CART") {
    return {};
  }
  return state;
}

const store = createStore(
  combineReducers({
    pizzas: pizzaReducer,
    cart: cartReducer,
    currentUser: userReducer,
    totalPrice: totalPriceReducer
  }),
  applyMiddleware(logger),
);


export default store;
