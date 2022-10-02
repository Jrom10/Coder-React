import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useCart} from '../../context/CartContex'
import CartItem from './CartItem';

function Cart() {
    const {cart, cartTotal, clear} = useCart()
    const navegar = useNavigate()

    return ( 
        <div>
            {
                ! cart.length
                ? <div>
                    <h2>Carrito Vacio</h2>
                    <button onClick={()=>navegar('/')}>Ir a comprar</button>
                </div>
                : <div>
                    <h2 style={{}}>Tu Carrito</h2>
                        {cart.map((compra) => <CartItem key={compra.id} compra={compra}/>)}
                    <span>Total a pagar : ${cartTotal()}</span><br />
                    <button onClick={clear}>Vaciar Carrito</button>
                    <button onClick={()=>navegar('/checkout')}>Terminar Compra</button>
                </div>
            }
        </div>
    );
}

export default Cart;