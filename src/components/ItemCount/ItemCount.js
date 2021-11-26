import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './itemCount.css';

const ItemCount = ({onAdd,stock}) => {

    const [count, setCount] = useState(1);

    //funcion sumar
    const handleClick = () => {
        if ( count < stock){
        setCount (count + 1);}
    }

    //funcion restar
    const handlClick = () => {
        if ( count >= 2){
        setCount (count - 1);}
    }

    //funcion reiniciar a 1
    const reset = () => {
        setCount (1)
    }

    return (
        <div className="contador">
            <p>PRODUCTOS</p>
            <div className="sumaResta">
            <button className="boton btn btn-danger" onClick={handlClick}>-</button>
            <span>{count}</span>
            <button className="boton btn btn-danger" onClick={handleClick}>+</button>
            </div>
            <button className="btn btn-danger" onClick={reset}>Quitar</button>
            <button className="agregar btn btn-danger" onClick={onAdd}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount;