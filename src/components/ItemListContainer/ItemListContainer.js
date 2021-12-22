import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList"
import "./itemListContainer.css";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from '../../services/firebase/firebase'




const ItemListContainer = ({greeting}) =>  {

    const [productos, setProductos] = useState([])
    const {categoriaId} = useParams();
    console.log(categoriaId);
    const [loading, setLoading] = useState()

    useEffect(() => {     
       
        if(!categoriaId){
        //Agrego pantalla de carga al comienzo
        setLoading(true)

        //Funcion que retorna una promise de firebase
        getDocs(collection(db, 'items')).then((querySnapshot) =>{
            console.log(querySnapshot)
            const productos = querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            setProductos(productos)
        }).catch((error)=>{
            console.log (error)
        }).finally(() => {
            setLoading(false)
        })
        } else{
            setLoading(true)
            getDocs(query(collection(db, 'items'), where('categoria', '==', categoriaId))).then((querySnapshot) =>{
                console.log(querySnapshot)
                const productos = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data()}
                })
                setProductos(productos)
            }).catch((error)=>{
                console.log (error)
            }).finally(() => {
                setLoading(false)
            })
        }
            

        return (() => {
            setProductos([])
        })
        
    }, [categoriaId])

    if(loading) {
        return (<div className='gif'><img src="https://c.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif" alt="cargando"></img></div>)
    }

    return (
        <div className="App-header">
            <div className="saludo">{greeting}</div>
            <ItemList productos = {productos}/>      
        </div>
    )
}

export default ItemListContainer;


