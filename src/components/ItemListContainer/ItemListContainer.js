import ItemCount from "../ItemCount/ItemCount";
import swal from 'sweetalert';
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList"
import { getProductos } from "../../productos";
import { Carousel } from "bootstrap";



//SWEET ALERT
const onAdd = () => {
    swal({
    title:"Felicitaciones!",
    text:"Finalizaste tu compra",
    icon: "success",
    button:"Volver"
})
}


const ItemListContainer = ({greeting}) =>  {

    const [productos, setProductos] = useState([])

    useEffect( () => {
        const list = getProductos()
        list.then( list => {
            setProductos(list)
        })

        return( () => {
            setProductos([])
        })
    }, [])



    return (
        <div className="App-header">
            <h1>{greeting}</h1>
            <ItemList productos = {productos}/>
            <ItemCount onAdd = {onAdd} stock = {3}/>
        </div>
    )
}

export default ItemListContainer;
