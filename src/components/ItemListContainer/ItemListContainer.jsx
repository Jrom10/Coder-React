import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../../firebase/firebase"

export default function ItemListContainer() {
    const [productList, setProductList]= useState([])
    const [loading, setLoading]= useState(false)
    const {categoryId} = useParams()


    useEffect(() => {
        setLoading(true)
        const productos = categoryId ? query(collection(db, "products"),where("category", "==", categoryId)) : collection (db, "products")
        getDocs(productos)
        .then ((result)=>{
            const lista = result.docs.map((product) =>{
                return{
                    id:product.id,
                    ...product.data()
                }
            })
            setProductList(lista)
        })
        .catch ((error)=>console.log(error))
        .finally(()=>setLoading(false))
    }, [categoryId])
    
        return (
        <div>
            {loading 
            ? <div style={{display:'flex', justifyContent:'center'}}>
                <p className='loader'></p>
            </div> 
            :<div style={{display:'flex', alignItems:'center', justifyContent:'center'}}> <ItemList productList={productList}/></div>}             
        </div>
        );
    }