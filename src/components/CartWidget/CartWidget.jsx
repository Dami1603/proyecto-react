import React from 'react'
import "./CartWidget.css"
function CartWidget() {

  const imagencarrito = "https://cdn-icons-png.flaticon.com/128/1170/1170678.png" 

  return (
    <div>
    <img className='carritoimg' src={imagencarrito} alt="" />
    </div>
  )
}

export default CartWidget