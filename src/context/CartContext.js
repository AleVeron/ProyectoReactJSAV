import React, {useContext, useState} from 'react';

//Creo el context del notification context
const CartContext = React.createContext()
const useCartContext = () => useContext(CartContext)


//Creo la mascara a importar 
export const CartContextProvider = ({children}) => {

    const [itemsCart, setItemsCart] = useState([])

    const isInCart = (id) => {
      if(itemsCart === null) return false;
      return itemsCart.some((item) => {
        return item.id === id;
      })
    }
    
    const addItem = (item, qty) =>{
        if(isInCart(item.id)){
            let itemToAdd = itemsCart.find((itemInCart)=>{
                return itemInCart.id === item.id;
            })
            itemToAdd.qty += qty;
            
            let filteredCart = itemsCart.filter((itemInCart)=>{
                return itemInCart.id !== item.id;
            });
            setItemsCart([...filteredCart,{ ...item,qty}])
        }
        else setItemsCart([...itemsCart,{ ...itemsCart,qty}])
    }


    const getQtyCart = () => {
      if(itemsCart === null) return 0;
      return itemsCart.reduce((total,item) => {
        return (total + item.qty);
      }, 0)
    }
  

    return (

        <CartContext.Provider value={{itemsCart, getQtyCart, isInCart, addItem}}>
            {children}
        </CartContext.Provider>

    )
}

export default useCartContext;