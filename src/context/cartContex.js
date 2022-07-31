import { createContext, useEffect, useState } from "react";

export const cartContext = createContext()

const Provider = (props) => {
    const [cart, setCart] = useState([])

    const totalCarrito = () => {
        let total = 0; 
        cart.forEach(item =>{
            total += item.price * item.cantidad
        });
        return total; 
    }

    const totalProductos = () => cart.reduce ((acumulador, productoActual) => acumulador + productoActual.cantidad, 0 )

    useEffect(()=> {
        console.log(cart);
    }, [cart]);

    const añadirAlCarrito = (item, cantidad) => {

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

    const eliminarUno = (id) => setCart (cart.filter(prod => prod.id !== id));

    const eliminarTodo = () => {
        setCart([]);
    };

    return(
        <cartContext.Provider value= {{ cart, añadirAlCarrito, eliminarTodo, eliminarUno,totalCarrito, totalProductos  }}>
            {props.children}
        </cartContext.Provider>
    )
}
 export default Provider