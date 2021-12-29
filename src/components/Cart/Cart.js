import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import "./cart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  addDoc,
  collection,
  writeBatch,
  doc,
  Timestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../../services/firebase/firebase";

const Cart = () => {
  //Funciones CartContext
  const { cart, removeItem, cleanCart, sweetAlert } = useContext(CartContext);
  console.log(cart);

  //Estados orden realizada y contacto
  const [estadoOrden, setEstadoOrden] = useState(false);
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
  });

  const completarFormulario = (e) => {
    const { nombre, value } = e.target;
    setFormulario({
      ...formulario,
      [nombre]: value,
    });
  };

  const ordenRealizada = () => {
    setEstadoOrden(true);

    const objetoOrden = {
      cliente: { nombre: formulario.comprador, email: formulario.email },
      items: cart,
      fecha: Timestamp.fromDate(new Date()),
    };

    const batch = writeBatch(db);
    const sinStock = [];

    objetoOrden.items.forEach((prod) => {
      getDoc(doc(db, "items", prod.id)).then((documentSnaphot) => {
        if (documentSnaphot.data().stock >= prod.cantidad) {
          batch.update(doc(db, "items", documentSnaphot.id), {
            stock: documentSnaphot.data().stock - prod.cantidad,
          });
        } else {
          sinStock.push({ id: documentSnaphot.id, ...documentSnaphot.data() });
        }
      });
    });

    if (sinStock.length === 0) {
      addDoc(collection(db, "ordenes"), objetoOrden)
        .then((doc) => {
          batch.commit().then(() => {
            console.log(`su orden es ${doc.id}`);
          });
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setTimeout(() => {
            cleanCart();
          }, 3000);
        });
    }
  };

  if (cart.length === 0) {
    return (
      <div className="carroVacio">
        <h1 className="vacio">Carro de compras vacio</h1>
        <img
          className="imagenCarro"
          alt="carro triste"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcx24Hhd6_-KRuqcnMxN3-YOww4TL08NdyHoOE3XDGXK3NVQ9E186reV2uZJJUf4FnpPw&usqp=CAU"
        ></img>
      </div>
    );
  }

  return (
    <div className="carro">
      {cart?.map((producto) => (
        <table className="table" key={producto.id}>
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
              <td>
                <img
                  className="imgCarro"
                  src={producto.img}
                  alt={producto.nombre}
                />
              </td>

              <th
                className="agregar btn btn-danger"
                onClick={() => removeItem(producto.id)}
              >
                Borrar item
              </th>
            </tr>
          </tbody>
        </table>
      ))}

      {!estadoOrden ? (
        <form method="POST" onSubmit={ordenRealizada}>
          <input
            onChange={completarFormulario}
            type="email"
            name="email"
            placeholder="email"
          />
          <input
            onChange={completarFormulario}
            type="text"
            name="nombre"
            placeholder="nombre"
          />
          <button
            disabled={
              cart?.length === 0 ||
              formulario.comprador === "" ||
              formulario.email === ""
            }
          >
            Finaliza tu compra!
          </button>
        </form>
      ) : (
        <h1>Felicitaciones, genero su compra</h1>
      )}

      <button className="agregar btn btn-danger" onClick={cleanCart}>
        Limpiar carro
      </button>
      <Link
        to={"./"}
        className="agregar btn btn-primary"
        onClick={() => sweetAlert("Felicidades, finalizaste tu compra!")}
      >
        Finalizar compra
      </Link>
    </div>
  );
};

export default Cart;

//alert(JSON.stringify(objetoOrden))
