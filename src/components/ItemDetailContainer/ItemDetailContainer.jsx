import React, { useState, useEffect } from 'react';
import ItemDetail from "./ItemDetail";
import { data } from '../../mocks/mockData';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {

    const [prod, setProd] = useState([]);
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()

    useEffect(() => {
            data
            .then((res) => setProd(res.find((item)=> item.id === productId)))
            .catch((e) => console.log(e))
            .finally(() => setLoading(false))
    }, [productId]);

    
    return (
        <div>
            {loading ? <p>Cargando...</p> : <ItemDetail prod={prod}/>}
        </div> 
    )
}