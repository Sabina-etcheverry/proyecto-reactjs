import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
// import products from "../../mock/products"
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    
  const [data, setData] = useState({})
  const { id } = useParams();
  
    useEffect(()=>{
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', id);
        getDoc(queryDoc)
        .then(res => setData({id: res.id, ...res.data()})) 
      }, [id])
  
  
    return (
      <ItemDetail item={data}/>
    )
  }
  
  export default ItemDetailContainer