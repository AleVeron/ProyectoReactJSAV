import "./cartWidget.css";
import {Link} from "react-router-dom"; 

const CartWidget = () => {
    return (
        <Link to={"/cart"}>
        <img className="widget" src="https://shopihunter.com/wp-content/uploads/2020/05/cadd6e246f651afda06423bb1d9d0b24-1.png" alt="widget"></img>
        <p className="cantidad">0</p>
        </Link>
    )
}

export default CartWidget;



//./widget.jpg