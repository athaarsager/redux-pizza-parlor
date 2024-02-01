import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import PizzaListItem from "../../PizzaListItem/PizzaListItem";



function PizzaList() {
    const pizzas = useSelector(store => store.pizzas)
    const dispatch = useDispatch();

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
        <div>
            {pizzas.map((pizza, i) => {
                return <PizzaListItem key={i} pizza={pizza} />
            })}
        </div>
    )

}

export default PizzaList;