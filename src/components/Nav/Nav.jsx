import { NavLink } from "react-router-dom/cjs/react-router-dom";

function Nav() {
    return(
        <ul>
            <li><NavLink to="/" exact>Home Page</NavLink></li>
            <li><NavLink to="/checkout">My Cart</NavLink></li>
        </ul>
    )
}

export default Nav;