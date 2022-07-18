import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import products from "../../mock/products"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const { id } = useParams();
  
    const traerProdPorId = () => {
      return new Promise((res)=>{
        setTimeout(()=>{
          res(products.find(prod => prod.id === id))
        }, 2000)
      })
}
  
    useEffect(()=>{
      traerProdPorId().then(res=>{
        setItem(res)
      })
    }, [id])
  
  
    return (
      <ItemDetail item={item}/>
    )
  }
  
  export default ItemDetailContainer