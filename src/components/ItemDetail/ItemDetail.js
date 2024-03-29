import "./itemDetail.css";
import { useContext, useState } from "react";
import ButtonCount from "../buttonCount/ButtonCount";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

const ItemDetail = ({ producto }) => {
  //Agrego funciones del useCartContext
  const { addItem } = useContext(CartContext);
  const [mostrarBoton, setMostrarBoton] = useState(true);

  //Funcion al darle click al elegir la cantidad deseada
  const addCarro = (count) => {
    setMostrarBoton(false);
    addItem(producto, count);
  };

  return (
    <div className="detaildedCart">
      <h1>{producto?.nombre}</h1>
      <img className="imagenCard" src={producto?.img} alt={producto?.nombre} />
      <p className="mt-2">Precio:{producto?.precio}</p>
      <p className="container">{producto?.info}</p>

      {mostrarBoton ? (
        <ButtonCount onAdd={addCarro} maxQuantity={producto?.stock} />
      ) : (
        <Link to={"/cart"} className="agregar btn btn-danger">
          Ir al carro de compras
        </Link>
      )}
    </div>
  );
};

export default ItemDetail;
