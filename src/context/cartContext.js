import { createContext, useEffect, useState } from "react";

export const cartContext = createContext()

const Provider = (props) => {
    const [cart, setCart] = useState([])

    const totalCart = () => {
        let total = 0; 
        cart.forEach(item =>{
            total += item.price * item.cantidad
        });
        return total; 
    }

    const totalProducts = () => cart.reduce ((acumulador, productoActual) => acumulador + productoActual.cantidad, 0 )

    useEffect(()=> {
        console.log(cart);
    }, [cart]);

    const addToCart = (item, cantidad) => {

        if (isInCart(item.id)) {
           setCart(cart.map(prod => {
            return prod.id === item.id ? {...prod, cantidad: prod.cantidad + cantidad } : prod 
           }))
        } else {
            setCart([...cart, {...item,cantidad }])
        }

    }

    const isInCart = (id) => {
        return cart.find (prod => prod.id === id) ? true : false 
    }

    const deleteOne = (id) => setCart (cart.filter(prod => prod.id !== id));

    const deleteAll = () => {
        setCart([]);
    };

    return(
        <cartContext.Provider value= {{ cart, addToCart, deleteAll, deleteOne ,totalCart, totalProducts  }}>
            {props.children}
        </cartContext.Provider>
    )
}
 export default Provider