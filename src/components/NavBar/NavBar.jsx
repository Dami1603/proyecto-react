import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"

function NavBar() {

  const imagenlogo = "https://i.imgur.com/1JCt2j7.png";

  return (
    <header>
        <img className="imglogo" src={imagenlogo} alt="" />
        <nav>
            <ul>
                <li>Electronicos</li>
                <li>Juegos de Mesa</li>
                <li>Gaming</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar