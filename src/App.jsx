import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Error from './components/Error/Error404'



function App() {

  return (
    <>

    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer></ItemListContainer>}></Route>
        <Route path='/:idCategoria' element={<ItemListContainer></ItemListContainer>}></Route>
        <Route path='/item/:idItem' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App
