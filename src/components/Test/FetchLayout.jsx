import { CatchingPokemon } from '@mui/icons-material';
import React from 'react';

export default function FetchLayout({ actividad }) {
    return (
        <>
            {actividad.map((poke,index) => (
                <div key={index}>
                    {JSON.stringify(poke)}
                </div>
            ))}
        </>
    )
}
