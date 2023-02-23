import React from 'react'
import {Routes,Route} from 'react-router-dom';
import ProductPage from '../pages/ProductPage/ProductPage';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import MainPage from '../components/HomePage/MainPage';



const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/products' element={<ProductPage/>} />
        <Route path='/products/:id' element={<h1>Product-Details</h1>} />
        <Route path='/cart' element={<h1>Cart</h1>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>}/>
    </Routes>
  )
}

export default AllRoutes

