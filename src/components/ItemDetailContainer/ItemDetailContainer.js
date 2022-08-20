import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
// import products from "../../mock/products"
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {
    
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  
    useEffect(()=>{
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', id);
        getDoc(queryDoc)
        .then(res => setData({id: res.id, ...res.data()})) 
        setLoading(false);
      }, [id])
  
  
    return (
    
    <div>
        
        {loading ? <Loader/> : <ItemDetail item={data} />}
      
    </div>

    )
  }
  
  export default ItemDetailContainer