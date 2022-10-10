import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useCart} from '../../context/CartContex'
import CartItem from './CartItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Cart() {
    const {cart, cartTotal, clear} = useCart()
    const navegar = useNavigate()

    return ( 
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            {
                ! cart.length
                ? <div style={{paddingBottom:'2rem'}}>
                    <h2>Carrito Vacio</h2>
                    <Button variant="contained" color='primary' onClick={()=>navegar('/')}>Ir a comprar</Button>
                </div>
                : <div style={{textAlign:'center'}}>
                    <h2>Tu Carrito</h2>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', paddingLeft:'23rem', width:'40rem'}}>
                        <h3>producto</h3><h3>Cantidad</h3><h3>Precio</h3>
                    </div>
                        {cart.map((compra) => <CartItem key={compra.id} compra={compra}/>)}
                    <div style={{fontWeight:"bold", fontSize:"30px"}} >Total a pagar : ${cartTotal()}</div><br />
                    <Stack direction="row" spacing={2} padding={2} justifyContent={'center'}>
                        <Button variant="contained" color="error" onClick={clear}>Vaciar Carrito</Button>
                        <Button variant="contained" color="success" onClick={()=>navegar('/checkout')}>Terminar Compra</Button>
                    </Stack>
                </div>
            }
        </div>
    );
}

export default Cart;