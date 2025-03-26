import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer mensaje={"Bienvenido! este es un proyecto de CoderHouse, realizado por Damian Santiago Dandrade"}/>
    </>
  )
}

export default App
