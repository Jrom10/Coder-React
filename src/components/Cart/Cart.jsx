import React from 'react';
import {useCart} from '../../context/CartContex'

function Cart() {
    const {cart} = useCart()

    console.log('carrito', cart);
    return ( 
        <div>Cart</div>
    );
}

export default Cart;