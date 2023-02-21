import React from 'react'
import {Routes,Route} from 'react-router-dom';


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/products' element={<h1>Products</h1>} />
        <Route path='/products/:id' element={<h1>Product-Details</h1>} />
        <Route path='/cart' element={<h1>Cart</h1>} />
        <Route path='/login' element={<h1>Login</h1>} />
    </Routes>
  )
}

export default AllRoutes

