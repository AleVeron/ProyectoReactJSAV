import ItemCount from "../ItemCount/ItemCount";
import swal from 'sweetalert';

const onAdd = () => {
    swal({
    title:"Felicitaciones!",
    text:"Se agrego al carro de compras",
    icon: "success",
    button:"Volver"
})
}

const ItemListContainer = ({greeting}) =>  {
    return (
        <div className="App-header">
            <h1>{greeting}</h1>
            <ItemCount onAdd = {onAdd} stock = {3}/>
        </div>
    )
}

export default ItemListContainer;
