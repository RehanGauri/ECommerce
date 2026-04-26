import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import ProductDetail from './pages/ProductDetail'
import Navbar from './components/Navbar'
import Shop from './pages/Shop'
import { ToastContainer } from "react-toastify";
import NewIn from './pages/NewIn'
import Collections from './pages/Collections'
import Sale from './pages/Sale'
import ProductDetails from "./pages/ProductDetails.jsx";

const App = () => {
  return (
    <>
    <Navbar />


        <div className='mt-16'> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/new' element={<NewIn />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/sale' element={<Sale />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
        </div>
          <ToastContainer />
    </>
    )
}

export default App