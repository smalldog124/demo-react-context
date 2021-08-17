import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeToCart } from '../redux/cart/action'

function Cart() {
  const count = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()
  console.log('count', count);
  return (
    <div>
      <button onClick={() => { dispatch(addToCart(2)) }} >addItemToCart</button>
      <button onClick={() => { dispatch(removeToCart(2)) }} >addItemToCart</button>
    </div>
  )
}

export default Cart
