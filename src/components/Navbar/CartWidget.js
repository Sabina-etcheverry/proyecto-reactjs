import React, { useContext } from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { cartContext } from '../../context/cartContex';


const  CartWidget = () => {
  const { totalProductos } = useContext(cartContext)
  return (
    <>
    <div>
      <button>
        <TiShoppingCart className='button'/>
        <span>{totalProductos() || ''}</span>
      </button>
    </div>
    </>
)
}
 export default CartWidget

