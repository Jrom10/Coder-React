import React from 'react'  
import Item from './Item'

export default function ItemList({productList}) {
    return (  
        <div>
            <div className='cardContainer'>
                {productList.map((product) => <Item product={product} key={product.id} /> )}
            </div>
        </div>
    )
}
