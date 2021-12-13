import React from 'react'
import ItemDetail from "./ItemDetail";
import "./itemDetailContainer.css";
import { useEffect, useState } from "react";
import swal from 'sweetalert';
import { useParams } from "react-router-dom";
import {getProductoById} from "../../productos";


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

    const {paramId} = useParams()
    console.log(paramId);

    const [productos, setProductos] = useState([])

    useEffect( () => {
        getProductoById(paramId).then(item => {
            setProductos(item)
        }).catch(err  => {
            console.log(err)
        })

        return (() => {
            setProductos()
        })

    }, [paramId])

    
        return(
            <div className="itemDetailContainer" >
                <ItemDetail onAdd = {onAdd} producto={productos}/>
            </div>
        )
    
}

export default ItemDetailContainer;