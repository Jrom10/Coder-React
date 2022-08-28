import React, { useState, useEffect } from 'react';


export default function ItemCount ({stock, initial, onAdd}) {

    const [contador, setContador] = useState(initial)

    useEffect(() => {
        console.log("se monto por primera vez");
    },[])

    return ( 
        <div>
            <h2>contador : {contador} </h2>
            <button
            disabled = { contador === stock}
            onClick={() => {
                setContador(contador + 1)
            }}
            >
                Sumar
            </button>
            <button
            disabled = { contador === 1}
            onClick={() => {
                setContador(contador - 1)
            }}
            >
                Restar
            </button>
            <button
            onClick={() => {
                onAdd(`la cantidad de items seleccionada ha sido de ${contador}`)
                }}
            >Añadir
            </button>
        </div>
    );
}
