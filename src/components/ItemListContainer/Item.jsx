import React from 'react';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function Item ({product}) {

    const {name, id, price, stock,} = product
    const navegar = useNavigate()

    return (
        <div className='cardContainer' style={{width:"20rem", margin:".5rem", height:'25rem'}}>
            <div style={{textAlign:"center", paddingBottom:"3rem"}}>
                <p style={{fontSize:"20px", fontWeight:"bold",fontFamily:"monospace"}}>{name}</p>
                <img style={{height:"10rem", width:"10rem"}} src={product.img} alt={product.name} />
                <p>Stock: {stock}</p>
                <p>Precio: ${price}</p>
                <Stack>
                    <Button style={{width:'10rem', alignSelf:'center'}} variant='outlined' onClick={()=> navegar(`/product/${id}`)}> Ver más </Button>
                </Stack>
            </div>
        </div>
    )
}

