import React, { useState, useEffect } from 'react';
// import products  from "../../mock/products";
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import { 
  getFirestore, 
  collection, 
  getDocs, 
  query, 
  where 
} from "firebase/firestore"
import Loader from '../Loader/Loader';

const ItemListContainer = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoria } = useParams()

useEffect(() => {
  const querydb = getFirestore();
  const queryCollection = collection(querydb, 'products');
  
  if (categoria) {
    const queryFilter = query(
      queryCollection, 
      where('category', '==', categoria)
      ) 
    getDocs(queryFilter).then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
    setLoading(false);
  } 
  else {
    getDocs(queryCollection)
    .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
  setLoading(false);
  }
}, [categoria])

return (
    <div>
          {loading ? <Loader /> : <ItemList items={data} />}
    </div>
  )
}

  export default ItemListContainer 



