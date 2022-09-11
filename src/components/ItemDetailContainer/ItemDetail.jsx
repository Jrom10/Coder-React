import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContex';
import ItemCount from '../ItemCount/ItemCount';

export default function ItemDetail({ prod }) {

    const [count, setCount] = useState(1)
    const [compra, setCompra] = useState(false)
    const {name,description,price,stock,id} = prod
    const navegar = useNavigate()
    const {addItem} = useCart()

    const onAdd =() => {
        let purchase ={ id, name, price, stock, quantity:count }
        setCompra(true)
        addItem(purchase)
    }

    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center" , flexDirection:"column"}}>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>${price}</p>
            { !compra ?
            <ItemCount stock={stock} initial={1} onAdd={onAdd} count={count} setCount={setCount}/>
            : <div style={{display: 'flex', justifyContent:'space-around', alignItems:'center', paddingBot:'2rem'}}>
                <button onClick={()=>navegar('/cart')}>Ir al carrito</button>
                <button onClick={()=>navegar('/')}>Seguir comprando</button>
            </div>
            }
        </div>
    )
}
