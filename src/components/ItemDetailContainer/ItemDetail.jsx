import { CatchingPokemon } from '@mui/icons-material';
import React from 'react';

export default function FetchLayout({ prod }) {
    return (
        <>
            {prod.map((poke,index) => (
                <div key={index} style={{textDecoration:"underline", background:"coral"}}>
                    <p>nombre: {poke.name} </p>
                    <p>URL: {poke.url} </p>
                </div>
            ))}
        </>
    )
}
