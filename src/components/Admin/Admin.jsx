import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AdminRow from "./AdminRow";

function Admin() {
    const orders = useSelector(store => store.orders);
    const dispatch = useDispatch();

    //need get request
    const getOrders = () => {
        axios.get("/api/order")
            .then((response) => {
                const action = {
                    type: "ADD_TO_ORDERS",
                    payload: response.data
                }
                dispatch(action);
            })
            .catch((error) => {
                console.error("ERROR in client-side Admin GET:", error);
            });
    }

    useEffect(() => {
        getOrders();
    }, []);

    return (
        <div>
            <h1>Live, Leavitt, Pizza Orders</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Time Order Placed</th>
                        <th>Type</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                <AdminRow />
                </tbody>
            </table>
        </div>
    )
}

export default Admin;