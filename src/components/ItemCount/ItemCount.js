import React, { useState } from 'react';
import "./ItemCount.css";

const ItemCount = ({ stock, initial, precio, onAdd }) => {
    const [count, setCount] = useState(initial);

    const restar = () => {
         if (count > initial) {
            setCount(count - 1);
        }
    };

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    return (
        <div className="counter">
            <div className="counter-btn">
                <button onClick={restar}>-</button>
                <p>{count}</p>
                <button onClick={sumar}>+</button>
            </div>
            <span style={{color:"whitesmoke", fontSize:"1.2em"}}><b>Total: ${count * precio}</b></span>
            <button className="agregar" onClick={()=>onAdd(count)}>AGREGAR AL CARRITO</button>
        </div>
    );
};

export default ItemCount;