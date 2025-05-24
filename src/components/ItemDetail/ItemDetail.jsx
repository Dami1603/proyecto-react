import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { toast } from 'react-toastify'

const ItemDetail = ({id,nombre,precio,img,stock,descripcion}) => {

    const [agregarCantidad,setAgregarCantidad] = useState(0)

    const {agregarAlCart} = useContext(CartContext)

    const manejadorCantidad = (cantidad) =>{
      setAgregarCantidad(cantidad)
      console.log("Productos agregados:" + cantidad)
      const item = {id,nombre,precio,img}
      agregarAlCart(item, cantidad)
      toast.success("Su compra fue enviada al carrito",{autoClose:1000,theme:"dark",position:"top-right"})

    }




  return (
    <div className='detailItem'>
        <div className='infodetailItem'>
        <h1>{nombre}</h1>
        <h2>${precio}</h2>
        <p>{descripcion}</p>
        <img src={img} alt={nombre} />
        {
            agregarCantidad > 0 ? (<div className='detailCartButton2'><Link to="/cart"> Terminar Compra</Link></div>) : (<ItemCount inicial={1} stock={stock} funcionagregar={manejadorCantidad}></ItemCount>)
        }
        </div>
    </div>
  )
}

export default ItemDetail