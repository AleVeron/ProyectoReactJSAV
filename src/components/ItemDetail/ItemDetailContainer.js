import ItemDetail from "./ItemDetail";
import "./itemList.css";
import { useEffect, useState } from "react";
import swal from 'sweetalert';
import { getUno } from "../../producto";

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
        const list = getUno()
        list.then( list => {
            setProductos(list)
        })

        return( () => {
            setProductos([])
        })
    }, [])

    
        return(
            <div className="itemList" >
                {productos.map(producto => <ItemDetail onAdd={onAdd} key={producto.id} producto={producto}/>)}
            </div>
        )
    
}

export default ItemDetailContainer;