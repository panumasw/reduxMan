import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import Products from './Products';
import Cart from './Cart';

const Auth = () => {
  return (
    <Routes>
      <Route path='/' element={<Products />} />
      <Route path='/cart' element={<Cart />} />
      <Route
            path="*"
            element={<Navigate to="/" replace />}
        />
    </Routes>
  )
}

export default Auth