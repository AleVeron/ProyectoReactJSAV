import { useContext } from "react";
import CartContext from "../../context/CartContext";
import "./cart.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = () => {
  const { cart, removeItem, cleanCart } = useContext(CartContext);
  console.log(cart);

  return (
    <div className="carro">
      {cart?.map((producto) => (
        <table class="table" key={producto.id}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Imagen</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{producto.nombre}</td>
              <td>{producto.precio}</td>
              <td>{producto.cantidad}</td>
              <img
                className="imgCarro"
                src={producto.img}
                alt={producto.nombre}
              />
              <th
                className="btn btn-danger agregar"
                onClick={() => removeItem(producto.id)}
              >
                Borrar item
              </th>
            </tr>
          </tbody>
        </table>
      ))}

      <button className="agregar btn btn-danger" onClick={cleanCart}>
        Limpiar carro
      </button>
    </div>
  );
};

export default Cart;
