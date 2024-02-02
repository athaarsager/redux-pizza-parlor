import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import PizzaListItem from "../../PizzaListItem/PizzaListItem";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

import './PIzzaList.css';



function PizzaList() {
    const pizzas = useSelector(store => store.pizzas)
    const dispatch = useDispatch();
    const history = useHistory();

    const fetchPizzas = () => {
        axios.get('/api/pizza')
            .then(response => {
                dispatch({type: "GET_PIZZAS", payload: response.data});
            }).catch(error => {
                console.log('Got an error getting pizzas', error);
            })
    }

    useEffect(() => {
        fetchPizzas();
    }, []);



    return(
        <div className="cardContainer">
            {pizzas.map((pizza, i) => {
                return <PizzaListItem key={i} pizza={pizza} />
            })}
            <button className="nextPage" onClick={() => history.push('/customer')}>Enter Customer Info</button>
        </div>
    )

}

export default PizzaList;