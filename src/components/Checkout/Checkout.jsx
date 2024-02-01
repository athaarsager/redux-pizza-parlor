import Header from "../Header/Header";
import { useSelector } from "react-redux";
function Checkout() {
    // NEED: DISPLAY CART ON PAGE IN TABLE FORMAT. JUST NAME AND COST OF EACH PIZZA
    // NEED: DISPLAY USER INFO AS PER README
    // NEED: CHECKOUT BUTTON
        // ON-CLICK: SEND USER INFO, ORDER TOTAL, AND ARRAY OF PIZZAS TO SERVER
            // SHOW CONFIRMATION DIALOG -- SWEETALERT TIME!
            // NAVIGATE USER BACK TO SELECT PIZZA PAGE
            // CLLEAR REDUCERS AS APPROPRIATE
    const currentUser = useSelector(store => store.currentUser);
    return (
        <>
        <Header />
        <h2>Step 3: Checkout</h2>
        <p>{currentUser.customer_name}</p>
        <p>{currentUser.street_address}</p>
        <p>{currentUser.city}</p>
        </>
    )
}
export default Checkout;