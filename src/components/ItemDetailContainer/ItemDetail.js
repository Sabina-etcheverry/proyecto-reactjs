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
    <div className="itemDetail">
      <div className="img-detail-cont">
        <img src={img} alt="" className="img-detail" />
      </div>
      <div className="text-container">
        <div className="titulo-container">
            <h1>{name}</h1>
            <h3 style={{color: "black"}}>${price}</h3>
        </div>
        
        <p>
          {description}
        </p>
        {cantidad === 0
        ? <ItemCount stock={stock} precio={price} onAdd={onAdd} initial={1}/>
        : <Link to="/cart">Ir a mi carrito</Link>
        }
        
        
      </div>
    </div>
  );
}
export default ItemDetail
