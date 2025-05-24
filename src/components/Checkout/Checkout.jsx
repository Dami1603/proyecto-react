import React, { useContext } from 'react'
import { useState } from 'react'
import { db } from '../../services/config'
import { CartContext } from "../../context/CartContext"
import { collection, addDoc, updateDoc, doc, getDoc} from 'firebase/firestore'
import './Checkout.css'


const Checkout = () => {

    const [nombre, setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [telefono,setTelefono] = useState("")
    const [email,setEmail] = useState("")
    const [emailConfirmacion,setEmailConfirmacion] = useState("")
    const [error,setError] =useState("")
    const [ordenid,setOrdenId] = useState("")

    const {carrito,vaciarCarrito,total,totalCantidad,cantidadTotal} = useContext(CartContext)



    const manejadorFormulario =(evento) =>{
        evento.preventDefault()
        
        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Por favor completa todos los campos requeridos")
            return
        }

        if(email !== emailConfirmacion){
            setError("los campos email no coinciden")
            error
        }
    

    const orden = {
         items: carrito.map(producto =>({
            id: producto.item.id,
            nombre: producto.item.nombre,
            cantidad: producto.cantidad
         })),
         total: total,
         fecha: new Date(),
         nombre,
         apellido,
         telefono,
         email
    }

    Promise.all(
        orden.items.map(async (productoOrden)=>{
            const productoRef = doc(db, "productos", productoOrden.id)
            const productoDoc = await getDoc(productoRef)
            const stockActual = productoDoc.data().stock

            await updateDoc( productoRef, {
                stock: stockActual - productoOrden.cantidad
            })
        })
    )
    .then(()=>{
        addDoc(collection(db,"ordenes"),orden)
        .then(docRef =>{
            setOrdenId(docRef.id)
            vaciarCarrito()
        })
        .catch(error=>{
            console.log("error al crear la orden de compra",error)
            setError("Se produjo un error al generar la orden")
        })
    })
    .catch(error=>{
        console.log("No se pudo actualizar el stock", error)
        setError("No se pudo actualizar el stock")
    })


}
  return (
    <>
    <div className='checkout'>
        <h2>Checkout</h2>

    <form onSubmit={manejadorFormulario}>
        {
            carrito.map(producto => (
                <div key={producto.item.id}>
                    <p>x {producto.cantidad} {producto.item.nombre}  ${producto.item.precio}</p>
                </div>
            ))
        }
        <div className='checkoutTotal'>
            <p>Total a pagar: ${total}</p>
            <p>Cantidad total de productos: {cantidadTotal}</p>
        </div>
        <div>
            <label htmlFor="">Nombre: </label>
            <input type="text" onChange={(e)=> setNombre(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="">Apellido: </label>
            <input type="text" onChange={(e)=> setApellido(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="">Telefono: </label>
            <input type="text" onChange={(e)=> setTelefono(e.target.value)}/>
        </div>                
        <div>
            <label htmlFor="">Email: </label>
            <input type="email" onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="">Email Confirmacion:</label>
            <input type="email" onChange={(e)=> setEmailConfirmacion(e.target.value)} />
        </div>        
        {
            error && <p style={{color:"red"}}>{error}</p>
        }
        <button type='submit'>Confirmar Compra</button>
        {
            ordenid && ( <strong>Gracias por tu compra tu numero de orden es: {ordenid}</strong>)
            
        }
    </form>
    </div>
    </>
  )
}

export default Checkout