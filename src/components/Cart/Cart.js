import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/cartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const Cart = () => {

    const { cart, deleteAll, deleteOne , totalCart } = useContext(cartContext);

    const order = {
        buyer: {
            name: 'Sabina',
            email: 'sabina@gmail.com',
            phone: '2233'
        },

        items: cart.map(product => ({id: product.id, name: product.name, price: product.price, cantidad: product.cantidad})),
        total: totalCart(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({ id }) => console.log(id));
    }

    
    if (cart.length === 0) {
        return (
            <h2>
                Aún no hay productos, volver al <Link to="/">Home</Link>
            </h2>
        );
    }
    return (
        <div>
            {cart.map((prod) => (
                <div
                    key={prod.id}
                    style={{
                        border: '1px solid black',
                        margin: '10px',
                        display: 'flex',
                    }}
                >
                    <img src={prod.img} width="70px" alt={prod.name} />
                    <div>
                        <h2>{prod.name}</h2>
                        <h2>${prod.price}</h2>

                    </div>
                    <button onClick={() => deleteOne(prod.id)}>Eliminar</button>
                </div>
            ))}
            <button onClick={deleteAll}>Eliminar todos los productos</button>
            <h3>{`Total: $${totalCart()}`}</h3>
            <button onClick={handleClick}>Generar compra </button>
        </div>
    
    );
};

export default Cart;
