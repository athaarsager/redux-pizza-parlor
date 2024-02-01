import CheckoutRow from "./CheckoutRow";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./Checkout.css";
function Checkout() {
    // NEED: DISPLAY CART ON PAGE IN TABLE FORMAT. JUST NAME AND COST OF EACH PIZZA--DONE, NOT TESTED
    // NEED: DISPLAY USER INFO AS PER README--DONE, NOT TESTED
    // NEED: CHECKOUT BUTTON--DONE
    // ON-CLICK: SEND USER INFO, ORDER TOTAL, AND ARRAY OF PIZZAS TO SERVER
    // SHOW CONFIRMATION DIALOG -- SWEETALERT TIME!
    // NAVIGATE USER BACK TO SELECT PIZZA PAGE
    // CLEAR REDUCERS AS APPROPRIATE
    const currentUser = useSelector(store => store.currentUser);
    const cart = useSelector(store => store.cart);
    const totalPrice = useSelector(store => store.totalPrice);
    const dispatch = useDispatch();

    const priceFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    });

    const handleCheckout = () => {
        axios.post("/api/order", currentUser)
        .then((response) => {
            const action = {
                type: "CLEAR_CART",
                payload: response.data
            }
            dispatch(action);
        })
        .catch((error) => {
            console.error("Error in checkout POST:", error);
        });
    }

    return (
        <>
            <h2>Step 3: Checkout</h2>
            <p>{currentUser.customer_name}</p>
            <p>{currentUser.street_address}</p>
            <p>{currentUser.city}</p>
            <p>{currentUser.type}</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((pizza, i) => (
                        <CheckoutRow key={i} pizza={pizza} />
                    ))}
                </tbody>
            </table>
            <h2>Total: {priceFormatter.format(totalPrice)}</h2>
            <button>CHECKOUT</button>
        </>
    )
}
export default Checkout;