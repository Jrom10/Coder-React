import React, { useState, useEffect } from 'react';
import ItemDetail from "./ItemDetail"

export default function FetchContainer() {

    const [prod, setProd] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://pokeapi.co/api/v2/pokemon?limit=1')
            .then((res) => res.json())
            .then((json) => {
                setProd(json.results);
            })
            .catch((e) => console.log(e))
            .finally(() => console.log('lo ultimo que hago'));
        }, 2000);
    }, []);
    
    return <ItemDetail prod={prod}/>;
}