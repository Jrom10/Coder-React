import React from 'react';
import { useCart } from '../../context/CartContex';

function CartItem({compra}) {

    const{removeItem} = useCart()

    return (
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'2rem'}}>
            {/* <img src={compra.img} alt={compra.name}/> */}
            <span>{compra.name}</span>
            <span>{compra.quantity}</span>
            <span>${compra.price}</span>
            <button className='btn btn-danger' onClick={()=>removeItem(compra.id)}>Borrar</button>
        </div>
    );
}

export default CartItem;