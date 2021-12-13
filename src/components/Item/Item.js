import "./item.css"
import {Link} from "react-router-dom";


const Item = ({producto, onAdd}) =>{

    const handleClick = (evt) =>{
        evt.stopPropagation();
        console.log(`hice click en ${producto.nombre}`)
    }

    return(
        
        <article className="cartas" onClick={handleClick}>
            <img className="imagenCard" src={producto.img} alt={producto.nombre}/>
            <p>{producto.nombre}</p>
            <p>{producto.precio}</p>
            <Link to={`/detail/${producto.id}`} className="botonCard btn btn-primary" onClick={onAdd}>Agregar</Link>
        </article>
        
    )
}

export default Item;


