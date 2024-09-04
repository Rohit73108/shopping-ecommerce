import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import Cart from './components/AddToCart/Cart.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
    <App/>
    {/* <Cart/> */}
  </StrictMode>
  </BrowserRouter>
  ,
)
