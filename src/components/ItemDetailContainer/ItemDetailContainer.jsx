import React, { useState, useEffect } from 'react';
import ItemDetail from "./ItemDetail";
import { data } from '../../mocks/mockData';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from "../../firebase/firebase"

export default function ItemDetailContainer() {

    const [prod, setProd] = useState([]);
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()

    useEffect(()=>{
        const productsColecction = collection (db, "products")
        const docReference = doc(productsColecction, productId)
        getDoc(docReference)
        .then((result)=>{
            setProd({
                id:result.id,
                ...result.data()
            })
        })
        .catch((error)=>console.log(error))
        .finally(()=>setLoading(false))
    },[])



    // useEffect(() => {
    //         data
    //         .then((res) => setProd(res.find((item)=> item.id === productId)))
    //         .catch((e) => console.log(e))
    //         .finally(() => setLoading(false))
    // }, [productId]);

    
    return (
        <div>
            {loading ? <p>Cargando...</p> : <ItemDetail prod={prod}/>}
        </div> 
    )
}