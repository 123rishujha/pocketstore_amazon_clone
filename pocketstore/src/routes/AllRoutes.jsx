import React from 'react'
import {Routes,Route} from 'react-router-dom';
import ProductPage from '../pages/ProductPage/ProductPage';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import MainPage from '../components/HomePage/MainPage';
import Splitscree from "../admin/adminhome";
import SplitScreen from '../admin/adminlogin';
import Adminaddpro from '../admin/adminaddpro';
import Adminallproducts from '../admin/adminallproducts';
import ProductDetails from '../pages/ProductDetails/ProductDetails';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/products' element={<ProductPage/>} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<h1>Cart</h1>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>}/>
          <Route path='/adminlogin' element={<SplitScreen/>}/>
            <Route path='/Orders' element={<Splitscree/>}/>
            <Route path='/Add Products' element={<Adminaddpro/>}/>
            <Route path='/adminallprod' element={<Adminallproducts/>}/>
    </Routes>
  )
}

export default AllRoutes

