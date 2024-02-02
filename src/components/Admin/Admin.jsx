import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Admin() {
    const orders = useSelector(store => store.orders);

    //need get request
    const getOrders = () => {
        axios.get("/api/order")
        .then((response) => {
            
        })
        .cath((error) => {
            console.error("ERROR in client-side Admin GET:", error);
        });
    }

    return (
        <div>
            <header>
                <h1>Live, Leavitt, Pizza Orders</h1>
            </header>
            <table>
                <theader>
                    <row>
                        <th>Name</th>
                        <th>Time Order Placed</th>
                        <th>Type</th>
                        <th>Cost</th>
                    </row>
                </theader>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}

export default Admin;