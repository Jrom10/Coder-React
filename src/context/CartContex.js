import React from 'react';
import {createContext, useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'


export const CartContext = createContext()
const prodFromLocalStorage = JSON.parse(localStorage.getItem('cartLs') || '[]')


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(prodFromLocalStorage)

    useEffect(() => {
        localStorage.setItem('cartLs',JSON.stringify(cart))
    },[cart])

    const clear = () =>{
        setCart([])
    }

    const addItem = (item) =>{
        const existsInCart = cart.find((prod) => prod.id === item.id)
        if(existsInCart){
            const carritoActualizado = cart.map((prod) =>{
                if(item.quantity+prod.quantity<=item.stock){
                    if(prod.id === item.id){
                        return {...prod, quantity:prod.quantity + item.quantity}
                    }else{
                        Swal.fire({
                            title: 'Producto Agregado',
                            timer:'1000',
                            icon: 'success',
                            width: '25rem',
                            showConfirmButton: false,
                            color:'black'
                        })
                        return prod
                    }
                }else{
                    Swal.fire({
                        title: 'Oops...',
                        text:'Stock Insuficiente',
                        width: '20rem',
                        confirmButtonColor: '#61481C',
                        color:'black'
                    })
                    return prod
            }
            })
            setCart(carritoActualizado)
        } else {
            Swal.fire({
                title: 'Producto Agregado',
                timer:'1000',
                icon: 'success',
                width: '25rem',
                showConfirmButton: false,
                color:'black'
            })
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