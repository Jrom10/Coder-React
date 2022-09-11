import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Item ({product}) {

    const {name, id, price, stock, description} = product
    const navegar = useNavigate()

    return (
        <div className='card' style={{width:"20rem", margin:".5rem"}}>
            <div>
                <p>Nombre: {name}</p>
                <p>descripcion: {description}</p>
                <p>stock: {stock}</p>
                <p>Precio: ${price}</p>
            </div>
        
            <button className='btn btn-primary' onClick={()=> navegar(`/product/${id}`)}> Ver más</button>
        </div>
    )
}

