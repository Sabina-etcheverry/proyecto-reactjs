import React, { useState }from 'react'
import { useEffect } from 'react'
import { products } from '../mock/products'
import ItemList from './ItemList';


function ItemListContainer({greeting}){

  const [items, setItems] = useState([]);
    useEffect(() => {
        const traerProductos = new Promise((res, rej) => {
            setTimeout(() => {
                res(products);
            }, 2000);
        });
        traerProductos
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                console.log(error);
            });
          }, []);



  return (
    <div>
        <h1 style={{fontSize: "35px"}}>
            Bienvenido {greeting}, Es hora de comprar! 
        </h1>
        <ItemList items={items}/>
    </div>
  )
}

export default ItemListContainer



