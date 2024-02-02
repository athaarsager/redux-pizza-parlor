import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";

function PizzaListItem({pizza}) {
    const dispatch = useDispatch();
    const cart = useSelector(s=>s.cart);
    // const [isInCart, setIsInCart] = useState(false);

    const priceFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    });

    function isInCart(pizza) {
        // console.log("cart pizza", cart);
        let pizzaFound = cart.filter((pizzaInCart) => pizzaInCart.id === pizza.id);
        console.log("found pizza", pizzaFound);
        return pizzaFound.length != 0? true : false;
    }

    const addToCart = () => {
        // console.log(pizza);
        if(isInCart(pizza)) {
            dispatch({
                type: "REMOVE_FROM_CART",
                payload: pizza.id
            })
            
        // setIsInCart(true);
        } else {
            dispatch({
                type: "ADD_TO_CART",
                payload: pizza
            })
           
        // setIsInCart(false)
        }
    }

    
    
    console.log(isInCart(pizza));
    return(
        <div key={pizza.id}>
            <img src={pizza.image_path} alt={pizza.description}/>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <h5>{priceFormatter.format(pizza.price)}</h5>
            <button onClick={addToCart}>
            {isInCart(pizza)? "REMOVE" : "ADD"}
            </button>
        </div>
    )
}

export default PizzaListItem;