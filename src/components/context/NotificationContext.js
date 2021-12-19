import React, {useState} from 'react';

//Creo el context del notification context
const Context = React.createContext()

//Creo la mascara a importar 
export const NotificationContextProvider = ({children}) => {

    //Inserto estados
    const [mensaje, setMensaje] = useState('');
    const [severity, setSeverity] = useState('');

    //Funcion para pasar el severity y el mensaje
    const setNotification = (severity, mensaje) => {
        setMensaje(mensaje);
        setSeverity(severity);
        setTimeout(() => {
            setMensaje('')
        }, 1500)
    }

    
    return (

        <Context.Provider value={{
            notification: {
                mensaje,
                severity
            },
            setNotification
        }}>
            {children}
        </Context.Provider>

    )
}

export default Context;