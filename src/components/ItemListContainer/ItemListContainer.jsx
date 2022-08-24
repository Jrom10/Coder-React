import React, { useState, useEffect } from 'react';

export default function ItemListContainer({ item, color, textAlert }) {
    textAlert("function para practicar")
    return (
        <div style={{color:color, textAlign:"center"}}>
            <h1>{item.msj}</h1>
        </div>
    );
}