import moment from "moment";
function AdminRow({ order }) {
    return (
        <tr>
            <td>{order.customer_name}</td>
            <td>{moment(order.time).format("MMMM Do YYYY, h:mm A")}</td>
            <td>{order.type}</td>
            <td>{order.total}</td>
        </tr>
    )
}

export default AdminRow;