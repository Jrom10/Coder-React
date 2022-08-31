import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

export default function New () {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        let PromesaNew = new Promise ((res, rej) => {
            setTimeout(() => {
                res([
                    {id: 10, name: `Nike`, price: 200},
                    {id: 11, name: `Adidas`, price: 300},
                    {id: 12, name: `Puma`, price: 100},
                ])
            }, 2000)
        })

        PromesaNew
            .then((res) => {
                setProducts(res)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return(
        <div>
            <ItemList prop = {products} load = {loading} error = {error}/>
        </div>
    )
}