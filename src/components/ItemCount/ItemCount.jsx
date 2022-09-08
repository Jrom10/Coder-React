
import React, { useState } from 'react'

export default function ItemCount ({initial, stock, onAdd}) {
    const[count, setCount]= useState(initial)

    const restar = () => {
        if(count > initial){
            setCount(count-1)
        }
    }

    const sumar=()=>{
        if(count<stock){
            setCount(count + 1)
        }
    }

    return (
    <>
    <div>
        <button className='btn btn-success' onClick={restar}>-</button>
        <span  className='btn btn-light'>{count}</span>
        <button  className='btn btn-danger'onClick={sumar}>+</button>
    </div>
        <button  className='btn btn-primary m-3'onClick={onAdd}>comprar</button>
    </>
    )
}

