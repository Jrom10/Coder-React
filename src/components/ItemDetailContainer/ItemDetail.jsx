import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContex';
import ItemCount from '../ItemCount/ItemCount';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

export default function ItemDetail({ prod }) {

    const [count, setCount] = useState(1)
    const [compra, setCompra] = useState(false)
    const {name,description,price,stock,id,img} = prod
    const navegar = useNavigate()
    const {addItem} = useCart()

    const onAdd =() => {
        let purchase ={ id, name, price, stock, quantity:count, img }
        setCompra(true)
        addItem(purchase)
    }

    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center" , flexDirection:"column"}}>
            <h2>{name}</h2>
            <img style={{height:"15rem"}} src={img} alt={name} />
            <p>{description}</p>
            <p>${price}</p>
            { !compra ?
            <ItemCount stock={stock} initial={1} onAdd={onAdd} count={count} setCount={setCount}/>
            : <div style={{display: 'flex', justifyContent:'space-around', alignItems:'center', paddingBot:'2rem'}}>
                <Stack direction='row' spacing={2} paddingBottom={3}>
                    <Button variant='contained' endIcon={<ShoppingCartCheckoutIcon/>} onClick={()=>navegar('/cart')}>Ir al carrito</Button>
                    <Button variant='contained' endIcon={<SendIcon/>} onClick={()=>navegar('/')}>Seguir comprando</Button>
                </Stack>
            </div>
            }
        </div>
    )
}
