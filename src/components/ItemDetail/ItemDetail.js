import "./itemDetail.css";
import { useState } from 'react';
import ButtonCount from "../buttonCount/ButtonCount"
import {Link} from 'react-router-dom';
import useCartContext from "../../context/CartContext";




const ItemDetail = ({producto}) =>{

    //Agrego funciones del useCartContext
    const {addItem} = useCartContext();
    const [buy, setBuy] = useState(false);
    const [qty, setQty] = useState(0);

    const handleBuy = (qty) => {
        setBuy(true);
        setQty(qty);
    }


    //Contador
    const Count = ButtonCount;

    //Funcion mostrar boton ir al carrito
    const [mostrarBoton, setMostrarBoton] = useState(true);


    //Funcion al darle click al elegir la cantidad deseada
    const addCarro = (count) =>{
        setMostrarBoton(false);
        addItem(producto, count);
    }
    
    return(
        
        <div className="detaildedCart">
            <h1>{producto?.nombre}</h1>
            <img className="imagenCard" src={producto?.img} alt={producto?.nombre}/>
            <p>Precio:{producto?.precio}</p>
            <p>{producto?.info}</p>

            {mostrarBoton ? 
            (<Count onAdd={addCarro}  maxQuantity={producto?.stock}/>) 
            :
            (<Link to={"/cart"} className="agregar btn btn-danger">Ir al carro de compras</Link>)
            }   
        </div>
        
    )
}

export default ItemDetail;

