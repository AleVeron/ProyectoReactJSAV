import React, {useState} from 'react';

//Creo el context del notification context
const CartContext = React.createContext();

//Creo la mascara a importar 
export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);


    //Consulta si hay en carrito
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };


    //Agregar cantidad
    const sumarCantidad = (producto, quantity) =>{
        const copia = [...cart];
        copia.forEach((prod) => {
            prod.id === producto.id && (prod.cantidad += quantity)
        })
    }


    //Añadir item
    const addItem = (producto, quantity) => {
        if (isInCart (producto.id)){
            console.log(producto);
            sumarCantidad(producto, quantity);
        } else {
            setCart([...cart, { ...producto, cantidad: quantity}]);
        }
    };


    //Eliminar un item del carro
    const removeItem = (id) => {
      const borrarItem = cart.filter((producto) => producto.id !== id)
      setCart(borrarItem)
    }


    //Vaciar carro de compras
    const cleanCart = () => {
        setCart([])
    }

    return (

        <CartContext.Provider value={{
          cart,
          addItem, removeItem, cleanCart}}>

            {children}

        </CartContext.Provider>

    )
}

export default CartContext;