import { createContext, useEffect, useState } from "react";

export const cartContext = createContext()

const Provider = (props) => {

    const [cart, setCart] = useState([])

    useEffect(()=> {
        console.log(cart);
    }, [cart]);

    const añadirAlCarrito = (item, cantidad) => {
        console.log("Agregando al carrito");

        if (isInCart(item.id)) {
            alert("Ya añadiste este producto al carrito")
        } else {
            setCart([...cart, {...item,cantidad }])
        }
    }

    const isInCart = (id) => {
        return cart.some (prod => prod.id === id)
    }

    const eliminarUno = (id) => {
        const productosFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(productosFiltrados);
    };

    const eliminarTodo = () => {
        setCart([]);
    };

    return(
        <cartContext.Provider value= {{ cart, añadirAlCarrito, eliminarTodo, eliminarUno }}>
            {props.children}
        </cartContext.Provider>
    )
}
 export default Provider