import React, { useState } from "react";
import swal from "sweetalert";

//Creo el context del notification context
const CartContext = React.createContext();

//Creo la mascara a importar
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //SweetAlert
  const sweetAlert = (mensaje) => {
    swal(mensaje);
    setCart([]);
  };


  //Agregar cantidad
  const sumarCantidad = (producto, quantity) => {
    const copia = [...cart];
    copia.forEach((prod) => {
      prod.id === producto.id && (prod.cantidad += quantity);
    });
  };

  //Añadir item
  const addItem = (producto, quantity) => {
    if (isInCart(producto.id)) {
      console.log(producto);
      sumarCantidad(producto, quantity);
    } else {
      setCart([...cart, { ...producto, cantidad: quantity }]);
    }
  };

    //Consulta si hay en carrito
    const isInCart = (id) => {
      return cart.some((prod) => prod.id === id);
    };
  

  //Eliminar un item del carro
  const removeItem = (id) => {
    const borrarItem = cart.filter((producto) => producto.id !== id);
    setCart(borrarItem);
  };

  //Vaciar carro de compras
  const cleanCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        cleanCart,
        sweetAlert,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
