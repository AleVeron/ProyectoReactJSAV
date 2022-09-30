import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import "./cart.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
  const { cart, removeItem, cleanCart } = useContext(CartContext);

  //Estados orden realizada y contacto
  const [estadoOrden, setEstadoOrden] = useState(false);
  const [contacto, setContacto] = useState({});
  

  const ordenRealizada = () => {

    setEstadoOrden(true);

    const objetoOrden = {
      items: cart,
      fecha: Timestamp.fromDate(new Date())
    };

    const batch = writeBatch(db);
    const sinStock = [];

    objetoOrden.items.forEach((prod) => {
      getDoc(doc(db, "items", prod.id)).then((documentSnapshot) => {
        if (documentSnapshot.data().stock >= prod.cantidad) {
          batch.update(doc(db, "items", documentSnapshot.id), {
            stock: documentSnapshot.data().stock - prod.cantidad,
          });
        } else {
          sinStock.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        }
      });
    });

    if (sinStock.length === 0) {
      addDoc(collection(db, "ordenes"), objetoOrden).then(({ id }) => {
        batch.commit().then(() => {
         alert(`El numero de orden es ${id}`)
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setTimeout(()=>{
          cleanCart();
          setEstadoOrden(false)
        }, 3000)
      })
    }

    setTimeout(() => {
      cleanCart();
      setEstadoOrden(false);
    }, 1500);
  };

  if (cart.length === 0) {
    return (
      <div className="carroVacio">
        <h1 className="vacio">Carro de compras vacio</h1>
        <img
          className="imagenCarro"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcx24Hhd6_-KRuqcnMxN3-YOww4TL08NdyHoOE3XDGXK3NVQ9E186reV2uZJJUf4FnpPw&usqp=CAU"
          alt="carrito"
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
            onChange={setContacto}
            type="email"
            name="email"
            placeholder="email"
          />
          <input
            onChange={setContacto}
            type="nombre"
            name="nombre"
            placeholder="nombre"
          />
          <button
                  className="agregar btn btn-primary"
            disabled={
              cart?.length === 0 ||
              contacto.comprador === "" ||
              contacto.email === ""
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

    </div>
  );
};

export default Cart;
