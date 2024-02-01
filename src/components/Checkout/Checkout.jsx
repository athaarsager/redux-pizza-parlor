import Header from "../Header/Header";
import CheckoutRow from "./CheckoutRow";
import { useSelector } from "react-redux";
import "./Checkout.css";
function Checkout() {
    // NEED: DISPLAY CART ON PAGE IN TABLE FORMAT. JUST NAME AND COST OF EACH PIZZA--DONE, NOT TESTED
    // NEED: DISPLAY USER INFO AS PER README--DONE, NOT TESTED
    // NEED: CHECKOUT BUTTON
    // ON-CLICK: SEND USER INFO, ORDER TOTAL, AND ARRAY OF PIZZAS TO SERVER
    // SHOW CONFIRMATION DIALOG -- SWEETALERT TIME!
    // NAVIGATE USER BACK TO SELECT PIZZA PAGE
    // CLEAR REDUCERS AS APPROPRIATE
    const currentUser = useSelector(store => store.currentUser);
    const cart = useSelector(store => store.cart);
    return (
        <>
            <Header />
            <h2>Step 3: Checkout</h2>
            <p>{currentUser.customer_name}</p>
            <p>{currentUser.street_address}</p>
            <p>{currentUser.city}</p>
            <p>{currentUser.type}</p>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Cost</th>
                </thead>
                <tbody>
                    {cart.map((pizza, i) => (
                        <CheckoutRow key={i} pizza={pizza}/>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default Checkout;