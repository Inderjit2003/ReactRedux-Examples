import React from 'react'
import { BrowserRouter , Route ,Routes } from "react-router-dom";
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<ProductList />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  </BrowserRouter>
  )
}
