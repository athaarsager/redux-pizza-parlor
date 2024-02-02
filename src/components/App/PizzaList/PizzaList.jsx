import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import PizzaListItem from "../../PizzaListItem/PizzaListItem";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Stack from '@mui/material/Stack';

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
        <Stack direction="row" spacing={1.5} useFlexGap flexWrap="wrap">
            {pizzas.map((pizza, i) => {
                return <PizzaListItem key={i} pizza={pizza} />
            })}
            <button className="nextPage" onClick={() => history.push('/customer')}></button>
        </Stack>
    )

}

export default PizzaList;