import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Error from './components/Error/Error404'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import { ToastContainer } from 'react-toastify'
import Checkout from './components/Checkout/Checkout';



function App() {

  return (
    <>

    <BrowserRouter>
      <CartProvider>
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer></ItemListContainer>}></Route>
            <Route path='/:idCategoria' element={<ItemListContainer></ItemListContainer>}></Route>
            <Route path='/item/:idItem' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
            <Route path='*' element={<Error></Error>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
            <Route path='/checkout' element={<Checkout></Checkout>}></Route>          
          </Routes>
      </CartProvider>
      <ToastContainer></ToastContainer>
    </BrowserRouter>
    </>
  )
}

export default App
