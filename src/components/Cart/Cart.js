import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/cartContext';
import "./Cart.css"


const Cart = () => {

    const { cart, deleteAll, deleteOne , totalCart } = useContext(cartContext);


    
    if (cart.length === 0) {
        return (
            <div className="cart-vacio-container">
            <h2 className="cart-vacio">
                Aún no hay productos, volver al <Link to="/">Home</Link>
            </h2>
            </div>
        );
    }
    return (
        <div>
            {cart.map((prod) => (
                <div key={prod.id} style={{border: '1px solid coral',margin: '10px',display: 'flex',}}>
                <img src={prod.img} width="70px" alt={prod.name} />
                <div>
                    <h2>{prod.name}</h2>
                    <h2>${prod.price}</h2>
                </div>
                    <button className="button-eliminar" onClick={() => deleteOne(prod.id)}>Eliminar</button>
                </div>
            ))}
            <button className="cart-btn btn-controls" onClick={deleteAll}>Eliminar todos los productos</button>
            <button className="cart-btn btn-controls"><Link to="/">Seguir comprando</Link></button>
            <h3>{`Total: $${totalCart()}`}</h3>
            <button className="cart-btn btn-controls">
            <Link to="/Checkout">Confirmar compra</Link>
          </button>
        </div>
    
    );
};

export default Cart;
