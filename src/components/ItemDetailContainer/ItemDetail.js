import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { cartContext } from "../../context/cartContext";

 const ItemDetail = ({item}) => {
  const {name, price, stock, img, description} = item

const [cantidad, setCantidad] = useState(0);
const { addToCart } = useContext (cartContext)

  const onAdd = (cantidad) => {
    setCantidad(cantidad)
    addToCart(item, cantidad)
  }
  
  return (

  <div className="itemDetail container">
    <div className="itemDetail-imagen">
      <img className="itemDetail-img" src={img} alt={name} />
    </div>
    <div className="itemDetail-cuerpo">
      <h2 className="itemDetail-title">{name}</h2>
      <p className="itemDetail-description">{description}</p>
      <p className="itemDetail-description">
        Stock: {stock}
      </p>
      <p className="itemDetail-description">Precio: ${price}</p>

      {cantidad === 0 ? (
        <ItemCount
          stock={stock}
          initial={1}
          precio={price}
          onAdd={onAdd}
        />
      ) : (
        <Link to="/cart">
          <button className="itemDetail-btn">Ir al Carrito</button>
        </Link>
      )}
    </div>
  </div>
);
}
export default ItemDetail
