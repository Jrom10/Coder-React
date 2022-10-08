import React from 'react';
import { useCart } from '../../context/CartContex';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function CartItem({compra}) {

    const{removeItem} = useCart()

    return (
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'2rem', width:'80rem'}}>
            <img style={{height:100}} src={compra.img} alt={compra.name}/>
            <span>{compra.name}</span>
            <span>{compra.quantity}</span>
            <span>${compra.price}</span>
            <IconButton aria-label="delete" onClick={()=>removeItem(compra.id)}>
                <DeleteIcon />
            </IconButton>
        </div>
    );
}

export default CartItem;