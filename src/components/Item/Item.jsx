import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'


const Item = ({id,nombre,precio,img}) => {


  return (
    <div className='cardProductos'>
        <img src={img} alt={nombre}></img>
        <h3>{nombre}</h3>
        <p>${precio}</p>
        <Link to={`/item/${id}`}>
        <button>Ver detalles</button>
        </Link>
        
    </div>
  )
}

export default Item