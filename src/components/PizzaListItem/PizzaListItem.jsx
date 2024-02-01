import { useDispatch } from "react-redux"
import { useState } from "react";

function PizzaListItem({pizza}) {
    const dispatch = useDispatch();
    const [isInCart, setIsInCart] = useState(false);

    const priceFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    });

    const addToCart = () => {
        console.log(pizza);
        if(!isInCart) {
            dispatch({
                type: "ADD_TO_CART",
                payload: pizza
            })
        setIsInCart(true);
        } else {
            dispatch({
                type: "REMOVE_FROM_CART",
                payload: pizza.id
            })
        setIsInCart(false)
        }
    }

    return(
        <div key={pizza.id}>
            <img src={pizza.image_path} alt={pizza.description}/>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <h5>{priceFormatter.format(pizza.price)}</h5>
            <button onClick={addToCart}>
            {isInCart ? "REMOVE" : "ADD"}
            </button>
        </div>
    )
}

export default PizzaListItem;