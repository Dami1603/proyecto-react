import React, { useContext } from 'react'
import "./CartWidget.css"
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

function CartWidget() {
  const imagencarrito = "https://i.imgur.com/CUi5btw.png" 
  const { cantidadTotal } = useContext(CartContext);

  return (
    <div className="cart-widget-container">
      <Link to="/cart" className="cart-link">
        <img className='carritoimg' src={imagencarrito} alt="Carrito de compras" />
        {cantidadTotal > 0 && (
          <span className="cart-badge">{cantidadTotal}</span>
        )}
      </Link>
    </div>
  )
}

export default CartWidget