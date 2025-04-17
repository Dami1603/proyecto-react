import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({id,nombre,precio,img,stock}) => {

    const [agregarCantidad,setAgregarCantidad] = useState(0)

    //creamos una funcion manejadora de la cantidad:

    const manejadorCantidad = (cantidad) =>{
        setAgregarCantidad(cantidad)
        console.log("Productos agregados:" + cantidad)
    }


  return (
    <div className='detailItem'>
        <div className='infodetailItem'>
        <h1>{nombre} id:{id}</h1>
        <h2>${precio}</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, quos alias officiis optio architecto a doloremque dicta iure quidem quam placeat omnis nostrum unde? Porro modi praesentium facere ipsa non!</p>
        </div>
        <img src={img} alt={nombre} />
        <div className='detailCartButton'>
        {
            ///Se emplea un montaje y desmotaje del contador
            agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionagregar={manejadorCantidad}></ItemCount>)
        }
        </div>
    </div>
  )
}

export default ItemDetail