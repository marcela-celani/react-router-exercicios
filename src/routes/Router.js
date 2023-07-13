import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage'
import ErrorPage from '../pages/ErrorPage'
import ProductDetail from '../pages/ProductDetail'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/profilepage' element={<ProfilePage/>} />
        <Route path='/product/:id' element={<ProductDetail/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
