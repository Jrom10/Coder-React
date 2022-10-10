import { db } from '../../firebase/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState} from 'react';
import {useCart} from '../../context/CartContex';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';


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
        return <div style={{display:'flex', justifyContent:'center'}}><p className='loader'></p></div> 
    }
    return ( 
        <div style={{textAlign:'center'}}>
            {!orderId
            ?<div>
                <h2>Terminar Compra</h2>
                <h4>Complete los campos</h4>
                <form style={{display:'flex', justifyContent:'space-evenly', alignItems:'center', flexDirection:'column', height:'15rem'}} onSubmit={finalizarCompra}>
                    <input type="text" placeholder='Nombre y Apellido' name='name' onChange={datosComprador}/>
                    <input type="number" placeholder='11 89752246' name='phone' onChange={datosComprador}/>
                    <input type="email" placeholder='React.Coder@gmail.com' name='email' onChange={datosComprador}/>
                    <Button variant="contained" color="success" type='submit'>Finalizar compra</Button>
                    {mensaje && <p style={{color:'red'}}>Complete todos los campos</p>}
                </form>
            </div>
            :
            <div>
                <h2>Muchas gracias</h2>
                <h4>Su numero de orden es: {orderId}</h4>
                <Button variant="contained" color="success" onClick={()=>navigate('/')}>Volver</Button>
            </div>}
        </div>
    )
}

export default Checkout;
