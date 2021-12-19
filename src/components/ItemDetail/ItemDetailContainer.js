import React from 'react'
import ItemDetail from "./ItemDetail"
import "./itemDetailContainer.css";
import { useEffect, useState } from "react";
import swal from 'sweetalert';
import { useParams } from "react-router-dom";
import {getProductoById} from "../../productos";


//SWEET ALERT
const onAdd = () => {
    swal({
    title:"Felicitaciones!",
    text:"Se agrego al carro de compras",
    icon: "success",
    button:"Volver"
})
}


const ItemDetailContainer = () =>  {

    const [loading, setLoading] = useState(true)
    const {paramId} = useParams()
    console.log(paramId);

    const [productos, setProductos] = useState([])

    useEffect( () => {
        getProductoById(paramId).then(item => {
            setProductos(item)
            setLoading(false)
        }).catch(err  => {
            console.log(err)
        })

        return (() => {
            setProductos()
        })

    }, [paramId])

    
        return(
            <div className="itemDetailContainer" >
               {loading ? <div className='gif'><img src="https://c.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif" alt="cargando"></img></div> : <ItemDetail onAdd = {onAdd} producto={productos}/>}
            </div>
        )
    
}

export default ItemDetailContainer;