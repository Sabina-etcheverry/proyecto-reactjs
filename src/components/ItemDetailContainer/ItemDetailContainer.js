import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
// import products from "../../mock/products"
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    
  const [item, setItem] = useState({})
  const { detalleId } = useParams();
  
    useEffect(()=>{
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'productos', 'detalleId');
        getDoc(queryDoc)
        .then(res => setItem({id: res.id, ...res.data()})) 
      }, [detalleId])
  
  
    return (
      <ItemDetail item={item}/>
    )
  }
  
  export default ItemDetailContainer