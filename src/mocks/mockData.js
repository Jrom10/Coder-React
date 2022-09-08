
const Product = [
    {id: '01', name: `Pelota`, price: 200, category:`Futbol`, stock: 5, description: `lorem`},
    {id: '02', name: `Medias`, price: 300, category:`Futbol`, stock: 2, description: `lorem`},
    {id: '03', name: `Botines`, price: 100, category:`Futbol`, stock: 3, description: `lorem`},
    {id: '04', name: `Guantes`, price: 200, category:`Boxeo`, stock: 4, description: `lorem`},
    {id: '05', name: `Casco`, price: 300, category:`Boxeo`, stock: 5, description: `lorem`},
    {id: '06', name: `Vendas`, price: 100, category:`Boxeo`, stock: 1, description: `lorem`},
    {id: '07', name: `karategi`, price: 200, category:`Karate`, stock: 4, description: `lorem`},
    {id: '08', name: `Cinturon`, price: 300, category:`Karate`, stock: 5, description: `lorem`}
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