import "./cartWidget.css";
import {Link} from "react-router-dom"; 

const CartWidget = () => {
    return (
        <Link to={"/cart"}>
        <img className="widget" src="./widget.jpg" alt="widget"></img>
        <p>0</p>
        </Link>
    )
}

export default CartWidget;