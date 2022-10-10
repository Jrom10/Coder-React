import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ItemCount ({initial, stock, onAdd, count, setCount}) {

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
    <Stack>
        <div style={{margin:'5px', textAlign:'center'}}>
            <Button variant="outlined" color="error" onClick={restar}>-</Button>
            <span  style={{margin:'15px'}}>{count}</span>
            <Button variant="outlined" color="success" onClick={sumar}>+</Button>
        </div>
        <Button style={{margin:'5px'}} variant='contained' onClick={()=>onAdd(count)}>Agregar al carrito</Button>
    </Stack>
    </>
    )
}

