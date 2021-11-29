import "./item.css"


const Item = ({producto, onAdd}) =>{
    return(
        
        <div className="cartas">
            <img className="imagenCard" src={producto.img} alt={producto.nombre}/>
            <p>{producto.nombre}</p>
            <p>{producto.precio}</p>
            <button className="botonCard btn btn-primary" onClick={onAdd}>Comprar</button>
        </div>
        
    )
}

export default Item;


