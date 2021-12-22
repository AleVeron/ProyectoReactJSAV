import React, {useContext, useState} from 'react';

//Creo el context del notification context
const CartContext = React.createContext()
const useCartContext = () => useContext(CartContext)


//Creo la mascara a importar 
export const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState([]);

  const getCantidad = () => {
      let subTotal = 0;
      cart.forEach(elemento=> {
          console.log(elemento);
          subTotal += elemento.cantidad
      })
      return subTotal;
  }

  const addItem = (producto, quantity) => {

      const flag = isInCart(producto);
      console.log(flag);
      if (flag) {
          let productoRepetido = cart.find (elemento => elemento.item === producto);
          productoRepetido.cantidad += quantity;
          let cartSinRepetido = cart.filter (elemento => elemento.item !== producto);
          setCart([...cartSinRepetido, productoRepetido]);
      } else {
          setCart([...cart, {item: producto, cantidad: quantity}]);
              }
           }

        const isInCart = (item) => {
          return cart.some(producto => producto.item === item );
           }
        console.log(cart)

  const removeItem = (item) => {

  }

  const cleanCart = () => {

  }

    return (

        <CartContext.Provider value={{
          cart,
          addItem, removeItem, cleanCart, getCantidad}}>

            {children}

        </CartContext.Provider>

    )
}

export default useCartContext;