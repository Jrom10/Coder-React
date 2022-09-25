import { db } from '../../firebase/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState} from 'react';
import {useCart} from '../../context/CartContex';
import { useNavigate } from 'react-router-dom';


function Checkout() {
    const [comprador, setComprador]= useState({})
    const [orderId, setOrderId] = useState('')
    const {cart, cartTotal, clear} = useCart()
    const navigate = useNavigate()
    const [mensaje, setMensaje] = useState(false)
    const [loader,setLoader] =useState (false)

    const datosComprador = (e) => {
        setComprador({
            ...comprador,
            [e.target.name]:e.target.value
        })
    }

    const finalizarCompra = (e) =>{
        e.preventDefault()
        if(Object.values(comprador).length !==3){
            setMensaje(true)
        }else{
            setMensaje(false)
            setLoader(true)
            const ventas = collection(db, "orders")
            addDoc(ventas,{
                comprador,
                items: cart,
                total: cartTotal(),
                date: serverTimestamp()
            })
            .then((res)=>{
                setOrderId(res.id)
                clear()
            })
            .catch((error)=> console.log(error))
            .finally(()=>setLoader(false))
        }
    }

    if(loader){
        return <p>Procesando Comprita</p>
    }
    return ( 
        <div>
            {!orderId
            ?<div>
                <h2>Terminar Compra</h2>
                <h4>Complete los campos</h4>
                <form style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', padding:'2rem'}} onSubmit={finalizarCompra}>
                    <input type="text" placeholder='Nombre y Apellido' name='name' onChange={datosComprador}/>
                    <input type="number" placeholder='444555666' name='phone' onChange={datosComprador}/>
                    <input type="email" placeholder='lalaland@gmail.com' name='email' onChange={datosComprador}/>
                    <button type='submit'>Finalizar compra</button>
                    {mensaje && <p style={{color:'red'}}>Complete todos los campos</p>}
                </form>
            </div>
            :
            <div>
                <h2>Muchas gracias</h2>
                <h4>Su numero de orden es: {orderId}</h4>
                <button onClick={()=>navigate('/')}>Volver</button>
            </div>}
        </div>
    )
}

export default Checkout;
