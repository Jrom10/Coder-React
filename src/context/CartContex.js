import {createContext, useContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const clear = () =>{
        setCart([])
    }

    const addItem = (item) =>{
        const existsInCart = cart.find((prod) => prod.id === item.id)
        if(existsInCart){
            const carritoActualizado = cart.map((prod) =>{
                if(prod.id === item.id){
                    return {...prod, quantity:prod.quantity + item.quantity}
                }else{
                    return prod
                }
            })
            setCart(carritoActualizado)
        } else {
            setCart([...cart,item])
        }
    }

    const removeItem = (id) =>{
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    const isInCart = (id) =>{
        return cart.some((prod)=> prod.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce((acum, prod) => acum += prod.quantity, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acum, prod) => acum += prod.price * prod.quantity, 0)
    }

    return (
        <CartContext.Provider value={{cart, clear, addItem, removeItem, isInCart, cartQuantity, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)