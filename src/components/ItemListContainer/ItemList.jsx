import React, { useState, useEffect } from 'react'  
import Item from './Item'

export default function ItemList({prop, load, error}) {
    
    return (  
        <div>
            <p>Loading: {load ? `Loading...` : `fin`}</p>
            <p>Error: {error ? error : null}</p>
            {prop.map((producto) => (
                <Item id = {producto.id} name = {producto.name} price = {producto.price}/>
            ))}
        </div>
    )
}
