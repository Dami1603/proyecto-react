import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList'
import { getProductos, getProductosPorCategoria } from '../../asyncmock'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({mensaje}) => {

  const [productos,setProductos] = useState([])


  const {idCategoria} = useParams()

  useEffect(()=>{
    const funcionProducto = idCategoria ? getProductosPorCategoria	: getProductos
    funcionProducto(idCategoria)
    .then(res => setProductos(res))
    .catch(error => console.log(error))
  },[idCategoria])


  return (
    <div className='tablaProductos'>
      <ItemList productos={productos}></ItemList>
    </div>
  )
}

export default ItemListContainer