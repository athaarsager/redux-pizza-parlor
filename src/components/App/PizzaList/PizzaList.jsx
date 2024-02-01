import React from "react";
import { useSelector } from "react-redux";
import PizzaListItem from "../../PizzaListItem/PizzaListItem";


function PizzaList() {
    const pizzas = useSelector(store => store.pizzas)

    return(
        <div>
            {pizzas.map((pizza) => {
                return <PizzaListItem key={pizza.id} pizza={pizza} />
            })}
        </div>
    )

}

export default PizzaList;