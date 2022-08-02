import React, { useState } from 'react';
import { useEffect } from 'react';
// import products  from "../../mock/products";
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {

  const [data, setData] = useState([]);
  const { categoria } = useParams()

useEffect(() => {
  const querydb = getFirestore();
  const queryCollection = collection(querydb, 'products');
  if (categoria) {
    const queryFilter = query(queryCollection, where('category', '==', categoria)) 
    getDocs(queryFilter)
    .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
  } else {
    getDocs(queryCollection)
    .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
  }
}, [categoria])

return (
    <div>
        <ItemList items={data}/>
    </div>
  )
}

  export default ItemListContainer 



