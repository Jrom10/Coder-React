
const Product = [
    {name: `Pelota`, price: 200, category:`Futbol`, stock: 5, description: `lorem`},
    {name: `Medias`, price: 300, category:`Futbol`, stock: 2, description: `lorem`},
    {name: `Botines`, price: 100, category:`Futbol`, stock: 3, description: `lorem`},
    {name: `Guantes`, price: 200, category:`Boxeo`, stock: 4, description: `lorem`},
    {name: `Casco`, price: 300, category:`Boxeo`, stock: 5, description: `lorem`},
    {name: `Vendas`, price: 100, category:`Boxeo`, stock: 1, description: `lorem`},
    {name: `karategi`, price: 200, category:`Karate`, stock: 4, description: `lorem`},
    {name: `Cinturon`, price: 300, category:`Karate`, stock: 5, description: `lorem`}
]

export const data = new Promise ((res, rej) => {
    let condition = true
    setTimeout (() => {
        if (condition){
            res(Product)
        }else{
            rej('salio mal')
        }
    })
})