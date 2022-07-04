import React from 'react'


function ItemListContainer({greeting}){
  return (
    <div>
        <h1 style={{fontSize: "35px"}}>
            Bienvenido {greeting}, Es hora de comprar! 
        </h1>
    </div>
  )
}

export default ItemListContainer



