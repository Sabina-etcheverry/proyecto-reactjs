import React, { useContext } from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { cartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
import "./CartWidget.css"


const  CartWidget = () => {
  const { totalProducts } = useContext(cartContext)
  return (
    <>
    <div>
      <Link to="/Cart">
      <TiShoppingCart className='button'/>
        <span>{totalProducts() || ''}</span>
      </Link>
        
    </div>
    </>
)
}
 export default CartWidget

