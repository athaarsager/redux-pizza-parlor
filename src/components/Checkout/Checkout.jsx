import CheckoutRow from "./CheckoutRow";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./Checkout.css";
function Checkout() {
    // NEED: DISPLAY CART ON PAGE IN TABLE FORMAT. JUST NAME AND COST OF EACH PIZZA--DONE, NOT TESTED
    // NEED: DISPLAY USER INFO AS PER README--DONE, NOT TESTED
    // NEED: CHECKOUT BUTTON--DONE
    // ON-CLICK: SEND USER INFO, ORDER TOTAL, AND ARRAY OF PIZZAS TO SERVER--DONE
    // SHOW CONFIRMATION DIALOG -- SWEETALERT TIME!--DONE
    // NAVIGATE USER BACK TO SELECT PIZZA PAGE--DONE!
    // CLEAR REDUCERS AS APPROPRIATE
    const currentUser = useSelector(store => store.currentUser);
    const cart = useSelector(store => store.cart);
    const totalPrice = useSelector(store => store.totalPrice);
    const dispatch = useDispatch();
    const history = useHistory();
    const priceFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    });

    const handleCheckout = () => {
        Swal.fire({
            title: "Are you sure you want to checkout?",
            text: "This will submit your order. You will not be able to make further changes",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, checkout!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Done!",
                    text: "Your order has been submitted! Please allow 7-10 Business Months for your order to be processed and delivered.",
                    icon: "success"
                });
                axios.post("/api/order", { ...currentUser, total: totalPrice, pizzas: cart.map((pizza) => ({id: pizza.id, quantity: '1'}))})
                    .then(() => {
                        const action = {
                            type: "CLEAR_CART",
                        }
                        dispatch(action);
                        history.push("/");
                    })
                    .catch((error) => {
                        console.error("Error in checkout POST:", error);
                    });
            }
        });

    }

    return (
        <>
            <h2>Step 3: Checkout</h2>
            <p>{currentUser.customer_name}</p>
            <p>{currentUser.street_address}</p>
            <p>{currentUser.city}</p>
            <p id="order-type"><strong>For {currentUser.type}</strong></p>
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
            <button onClick={handleCheckout}>CHECKOUT</button>
        </>
    )
}
export default Checkout;