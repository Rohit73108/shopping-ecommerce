import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/footer/Footer'
import {  Route, Routes } from 'react-router-dom'
import CartProduct from './components/CartProduct/CartProduct'
import ProductsList from './modules/ProductsList'
import CategoryProducts from './modules/CategoryProducts'
import Cart from './components/AddToCart/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Product/:id' element={<CartProduct/>}/>
        <Route path='/Products' element={<ProductsList/>}/>
        <Route path='/categories/:name' element={<CategoryProducts/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<div>404 PAGE NOT FOUND </div>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
