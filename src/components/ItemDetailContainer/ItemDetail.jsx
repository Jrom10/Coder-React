import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

export default function ItemDetail({ prod }) {
    const {name,description,price,stock} = prod
    const onAdd =() => {
        console.log("compraste");
    }

    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center" , flexDirection:"column"}}>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>${price}</p>
            <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
        </div>
    )
}
