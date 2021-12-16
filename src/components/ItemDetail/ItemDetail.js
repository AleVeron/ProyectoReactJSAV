import "./itemDetail.css";
import {useContext, useState} from 'react';
import NotificationContext from '../context/NotificationContext'
import ButtonCount from "../buttonCount/ButtonCount"
import {Link} from 'react-router-dom';



const ItemDetail = ({producto}) =>{

    const Count = ButtonCount;
    const [mostrarBoton, setMostrarBoton] = useState(true);
    const addCarro = (count) =>{
        alert(`Agregado al carro de compras ${count} ${producto.nombre}`)
        setMostrarBoton(false);
    }

  
    const {setNotification} = useContext(NotificationContext)

    return(
        
        <div className="detaildedCart">
            <h1>{producto?.nombre}</h1>
            <img className="imagenCard" src={producto?.img} alt={producto?.nombre}/>
            <p>Precio:{producto?.precio}</p>
            <p>{producto?.info}</p>

            {mostrarBoton ? 
            (<Count onConfirm={addCarro} maxQuantity={producto?.stock}/>) 
            : 
            (<Link to={"/cart"} className="agregar btn btn-danger">Ir al carro de compras</Link>)
            }   
        </div>
        
    )
}

export default ItemDetail;

