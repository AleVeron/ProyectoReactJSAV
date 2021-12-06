import "./itemDetail.css";
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({producto, onAdd}) =>{
    return(
        
        <div className="ampliado">
            <h1>{producto.nombre}</h1>
            <img className="imagenCard" src={producto.img} alt={producto.nombre}/>
            <p>Precio:{producto.precio}</p>
            <p>{producto.info}</p>
            <ItemCount stock = {3} onAdd = {onAdd}/>
        </div>
        
    )
}

export default ItemDetail;

