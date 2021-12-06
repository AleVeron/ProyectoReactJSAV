import Item from "../Item/Item";
import "./itemList.css";
import swal from 'sweetalert';


const onAdd = () => {
    swal({
    title:"Felicitaciones!",
    text:`Se agrego el producto al carro de compras`,
    icon: "success",
    button:"Volver"
})
}


const ItemList = ({productos}) => {

    return(
        <div className="itemList">
            {productos.map(producto => <Item onAdd={onAdd} key={producto.id} producto={producto}/>)}
        </div>
    )

}

export default ItemList;