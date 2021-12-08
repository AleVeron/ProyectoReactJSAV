import React from 'react'
import ItemDetail from "./ItemDetail";
import "./itemDetailContainer.css";
import { useEffect, useState } from "react";
import swal from 'sweetalert';
import {getItem} from "../../productos";


//SWEET ALERT
const onAdd = () => {
    swal({
    title:"Felicitaciones!",
    text:"Finalizaste tu compra",
    icon: "success",
    button:"Volver"
})
}

const ItemDetailContainer = () =>  {

    const [productos, setProductos] = useState([])

    useEffect( () => {
        const list = getItem()
        list.then( list => {
            setProductos(list)
        })

        return( () => {
            setProductos([])
        })
    }, [])

    
        return(
            <div className="itemDetailContainer" >
                <ItemDetail onAdd = {onAdd} producto={productos}/>
            </div>
        )
    
}

export default ItemDetailContainer;