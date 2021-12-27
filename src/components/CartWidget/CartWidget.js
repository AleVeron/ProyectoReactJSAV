import "./cartWidget.css";
import {Link} from "react-router-dom"; 
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    return (
        <Link to={"/cart"} className="widgetDiv">
        <img className="widget" src="https://shopihunter.com/wp-content/uploads/2020/05/1faeabde14214dfb782e66a6406c46a9.png" alt="widget"></img>
        <p className="cantidad">{cart.length}</p>
        </Link>
    )
}

export default CartWidget;



