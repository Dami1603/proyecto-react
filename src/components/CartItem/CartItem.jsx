import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartItem.css'

const CartItem = ({item,cantidad}) => {

    const {eliminarProducto} = useContext(CartContext)


  return (
    <div className='cardCart'>
        <img src={item.img} alt="" />
        <h4>{item.nombre}</h4>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: ${item.precio}</p>
        <button onClick={()=>{eliminarProducto(item.id)}}>Eliminar Producto</button>
    </div>
  )
}

export default CartItem