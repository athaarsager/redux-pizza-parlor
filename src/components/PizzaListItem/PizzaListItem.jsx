import { useDispatch } from "react-redux"

function PizzaListItem({pizza}) {
    const dispatch = useDispatch();

    const addToCart = () => {
        console.log(pizza);

        dispatch({
            type: "ADD_TO_CART",
            payload: pizza
        })
    }

    return(
        <div key={pizza.id}>
            <img href={pizza.image_path} alt={pizza.description}/>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <h5>{pizza.price}</h5>
            <button onClick={addToCart}>ADD</button>
        </div>
    )
}

export default PizzaListItem;