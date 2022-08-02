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


  useEffect(() => {

    const getItems = async () => {

      if (categoria !== undefined) {
        const querydb = getFirestore();
        const q = query(collection(querydb, 'products'), where('category', '==', categoria))
        await getDocs(q).then((res) => {
          const data = res.docs.map(prod => ({ id: prod.id, ...prod.data() }))

          setItems(data)
        })
      } else {

        const querydb = getFirestore();
        const q = (collection(querydb, 'products'))
        await getDocs(q).then((res) => {
          const data = res.docs.map(prod => ({ id: prod.id, ...prod.data() }))

          setItems(data)
        })
      }
    }


    getItems();

  }, [categoria])
         


return (
    <div>
        <ItemList items={items}/>
    </div>
  )
}

  export default ItemListContainer 



