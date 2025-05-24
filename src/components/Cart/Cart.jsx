import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import './Cart.css'

const Cart = () => {

    const {carrito,vaciarCarrito, total, cantidadTotal} = useContext(CartContext)

    if(cantidadTotal === 0){
        return(
            <>
                <div className='noProductos'>
                <h2>No hay productos en el Carrito</h2>
                <Link to="/">Ver Productos</Link>
                </div>
            </>
        )
    }


  return (
    <>
    <div className='carrito'>
        {
            carrito.map(producto => <CartItem key={producto.id} {...producto}/>) 
            
        }
    </div>   
    <div className='suma'>
        <h3>Total: ${total}</h3>
        <h3>Cantidad Total: {cantidadTotal}</h3>
        <button onClick={()=>vaciarCarrito()}>Vaciar Carrito</button>
        <Link to="/checkout" className='botonFinalizar'>Finalizar Compra</Link>
    </div>
    </>
  )
}

export default Cart