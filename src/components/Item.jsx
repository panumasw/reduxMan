import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../app/cartSlice'


export default function Item({product}) {
  const dispatch = useDispatch()
  const {user} = useSelector(state=> state.auth)

  return (
    <div className='col-lg-3 col-sm-6 my-2'>
      <div className='product' >
        <h4>{product.title}</h4>
        <p>{product.price}</p>
        {user? (
          <button onClick={()=> dispatch(addToCart({...product, quantity:1}))} >Add To Cart</button>
        ): (
          <button style={{cursor:"text"}} >Add To Cart</button>
        )}
        
      </div>
    </div>
    
  )
}