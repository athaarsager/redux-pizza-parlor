import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import PizzaList from './PizzaList/PizzaList';
import Checkout from '../Checkout/Checkout';

function App() {

  return (
    <div className='App'>
      <Header />
      <PizzaList />
      <Checkout />
    </div>
  );
}

export default App;
