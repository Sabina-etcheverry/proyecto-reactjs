import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

 const ItemDetail = ({item}) => {
  const {name, price, stock, img, description} = {item} 

  const onAdd = (cantidad) => {
    console.log("seleccionaste ", cantidad, " items")
  }

  return (
    <div className="itemDetail">
      <div className="img-detail-cont">
        <p>{name}</p>
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
        
        <ItemCount stock={stock} precio={price} onAdd={onAdd}/>
      </div>
    </div>
  );
}
export default ItemDetail
