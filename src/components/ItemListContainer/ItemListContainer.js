import React, { useState } from 'react';
import { useEffect } from 'react';
import products  from "../../mock/products";
import ItemList from './ItemList';
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const { categoria } = useParams()
    
  const traerProd = () => {
    return new Promise((res) => {
            setTimeout(() => {
                res(categoria ? products.filter(prod => prod.category === categoria) : products)
            }, 2000)
          })
        }
          useEffect(()=>{
            traerProd().then(res =>{
            setItems(res)
            })
          }, [categoria] )


return (
    <div>
        <ItemList items={items}/>
    </div>
  )
}

  export default ItemListContainer 



