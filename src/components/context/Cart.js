import React, {useState} from 'react';

//Creo el context del notification context
const Context = React.createContext()

//Creo la mascara a importar 
export const CartContext = ({children}) => {

    

    return (

        <Context.Provider>
            {children}
        </Context.Provider>

    )
}

export default Context;