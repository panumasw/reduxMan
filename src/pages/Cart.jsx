import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart } from '../app/cartSlice'

export default function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector(state=> state.cart)

  return (
  <div className='cart'>
    <div className='cart-body'>
      <h4>Title</h4>
      <h4>Price</h4>
      <h4>Quantity</h4>
      <h4>Amount</h4>
      <h4>Delete</h4>
    </div>
    {cart.length!==0 ? (
      cart.map((item) => {
        return (
          <div key={item.id} className='cart-body'>
              <p> {item.title} </p>
              <p> {item.price} </p>
              <p> {item.quantity} </p>
              <p> {item.price*item.quantity} </p>
              <p style={{ cursor: 'pointer' }} onClick={()=> dispatch(deleteCart(item.id))} >X</p>
          </div>
        )
      })
    ): (<span>Cart is Empty</span>)}
    
  </div>
  )
}