import Item from "../Item/Item";
import "./itemList.css";

const ItemList = ({ productos = [] }) => {
  return (
    <div className="itemList container d-flex flex-column flex-lg-row gap-3 mb-3">
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemList;
