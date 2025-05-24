import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"
import { Link, NavLink } from 'react-router-dom';

function NavBar() {

  const logo = "https://i.imgur.com/xmSDLAh.png"

  return (
    <header>
      <Link to="/">
      <img className="imglogo" src={logo} alt="Damistcglogo" />
      </Link>
        <nav className="navbar">
            <ul>
                <li>
                <NavLink to={"/singles"}> Singles </NavLink>
                </li>
                <li>
                <NavLink to={"/sellados"}> Sellados </NavLink>
                </li>
                <li>
                <NavLink to={"/"}> Todos </NavLink>
                </li>                                      
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar