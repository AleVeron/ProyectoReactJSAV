import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ producto, onAdd }) => {
  
  console.log("cards");
  
  return (
    <article className="cartas">
      <img className="imagenCard" src={producto.img} alt={producto.nombre} />
      <p>{producto.nombre}</p>
      <p>{producto.precio}</p>
      <div className="buttons">
        <Link
          to={`/detail/${producto.id}`}
          className="agregar btn btn-primary"
          onClick={onAdd}
        >
          Ver Detalles
        </Link>
      </div>
    </article>
  );
};

export default Item;
