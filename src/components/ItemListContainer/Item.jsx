import React, { useState, useEffect } from 'react';


export default function Item({id, name, price}) {
    return (
        <div style={{textAlign:"center"}}>
            <p>id:{id}</p>
            <p>nombre:{name}</p>
            <p>precio:{price}</p>
        </div>
    )
}


