import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import {data} from "../../mocks/mockData"

export default function ItemListContainer() {
    const [productList, setProductList]=useState([])
    const [loading, setLoading]= useState(false)
    const {categoryId} = useParams()

useEffect(()=>{
    setLoading(true)
        data
        .then((res)=>{
            if(categoryId){
            setProductList(res.filter((item)=> item.category === categoryId))
            }else{
            setProductList(res)
            }
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
        }, [categoryId])
    
    
        return (
        <div>
            {loading ? <p>Loading...</p>:<ItemList productList={productList}/>}
        </div>
        );
    }