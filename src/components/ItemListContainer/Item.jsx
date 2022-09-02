import React, { useState, useEffect } from 'react';


export default function Item({id, name, price}) {
    return (
        <div style={{textAlign:"center" , border:"1px solid blue", margin:"10px"}}>
            <p>Nombre: {name}</p>
            <p>Id: {id}</p>
            <p>Precio: ${price}</p>
        </div>
    )
}


