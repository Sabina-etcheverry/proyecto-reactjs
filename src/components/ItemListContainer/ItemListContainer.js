import React, { useState } from 'react';
import { useEffect } from 'react';
// import products  from "../../mock/products";
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const { categoria } = useParams()
    
  // const traerProd = () => {
  //   return new Promise((res) => {
  //           setTimeout(() => {
  //               res(categoria ? products.filter(prod => prod.category === categoria) : products)
  //           }, 1000)
  //         })
  //       }


          useEffect(()=>{
            const querydb = getFirestore();
            const queryCollection = collection(querydb, 'productos');
            if (categoria) {
              const queryFilter = query(queryCollection, where('category', '==', categoria))
              getDocs(queryFilter)
              .then(res => setItems(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            } else {
              getDocs(queryCollection)
              .then(res => setItems(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            }
            console.log(query);
          }, [categoria] )


return (
    <div>
        <ItemList items={items}/>
    </div>
  )
}

  export default ItemListContainer 



