import React from 'react'
import { Link } from 'react-router-dom'
import "./Error404.css"

const Error = () => {

  const errorimg = "https://arakakis.com/files/construccion.jpg"

  return (
    <div className='errorStyle'>
        <h1>Error</h1>
        <p>Sitio en construccion!</p>
        <Link to={`/`}>
        <button className='errorButton'>Volver</button>
        </Link>
    </div>
  )
}

export default Error