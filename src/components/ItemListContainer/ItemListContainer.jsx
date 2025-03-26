import React from 'react'
import "./ItemListContainer.css"

const ItemListContainer = ({mensaje}) => {


  return (
    <>
    <p className='error'>{mensaje}</p>
    </>
  )
}

export default ItemListContainer