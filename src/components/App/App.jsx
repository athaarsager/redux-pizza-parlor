import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import PizzaList from './PizzaList/PizzaList';
import Checkout from '../Checkout/Checkout';
import Admin from '../Admin/Admin';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


function App() {

  return (
    <div className='App'>
      <Header />
      <Router>
        <Nav />
      <Route path="/" exact>
        <PizzaList />
      </Route>
      <Route path="/checkout" exact>
        <Checkout />
      </Route>
      <Route path="/admin" exact>
        <Admin />
      </Route>
      </Router>
    </div>
  );
}

export default App;
