import React, { useContext } from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { cartContext } from '../../context/cartContext';


const  CartWidget = () => {
  const { totalProducts } = useContext(cartContext)
  return (
    <>
    <div>
      <button>
        <TiShoppingCart className='button'/>
        <span>{totalProducts() || ''}</span>
      </button>
    </div>
    </>
)
}
 export default CartWidget

