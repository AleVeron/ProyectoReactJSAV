import {useState} from 'react';
import './buttonCount.css';



const ButtonCount = ({onAdd, maxQuantity}) => {
    const [count, setCount] = useState(0)

    //funcion sumar
    const sumar = () => {
        if ( count < maxQuantity){
        setCount (count + 1);}
    }
    //funcion restar
    const restar = () => {
        if ( count >= 1){
        setCount (count - 1);}
    }
    return (
        <div className="contador">
            <div className="sumaResta">
            <button className="boton btn btn-danger" onClick={restar}>-</button>
            <span>{count}</span>
            <button className="boton btn btn-danger" onClick={sumar}>+</button>
            </div>
            <button className="agregar btn btn-danger" onClick={() => onAdd(count)}>Agregar al Carrito</button>
        </div>
    )
}

export default ButtonCount;