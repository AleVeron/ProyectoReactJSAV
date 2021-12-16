import { useEffect, useState } from "react";
import ItemList from "../itemList/ItemList"
import { getProductos } from "../../productos";
import "./itemListContainer.css";
import { useParams } from "react-router-dom";


const ItemListContainer = ({greeting}) =>  {

    const [productos, setProductos] = useState([])
    const {categoriaId} = useParams();
    console.log(categoriaId);
    const onResize = () =>{
        console.log("cambio tamaño de ventana");
    }



    useEffect(() => {        
        getProductos(categoriaId).then(item => {
            setProductos(item)
        }).catch(err  => {
            console.log(err)
        })

    window.addEventListener('resize', onResize)

    return (() => {
            setProductos([])
            window.removeEventListener('resize', onResize)
        })
        
    }, [categoriaId])

    return (
        <div className="App-header">
            <div className="saludo">{greeting}</div>
            <ItemList productos = {productos}/>      
        </div>
    )
}

export default ItemListContainer;


