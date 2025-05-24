import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import "./Loader.css"

const Loader = () => {
  return (
    <>
    <div className="Loader">
    <Spinner animation="border" variant="dark">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
    </>
  )
}

export default Loader