import React from 'react'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import ItemList from './itemList'
import { useDispatch } from 'react-redux'
import { clearCart } from '../commmon/cartSlice'

export default function Cart() {

   const cartItems=useSelector(Store=>Store?.cart?.items)
   const dispatch=useDispatch()
   const handleClearItem=()=>{

    dispatch(clearCart())
        
   }

  console.log("cartItem",cartItems)
  return (
    <div className='flex flex-col'>
      <h1 className='text-center text-lg font-bold'>Cart Items</h1>
      <button onClick={()=>{handleClearItem()}} className='rounded-lg w-32 space- text-center text-lg font-bold bg-black text-white'>Clear Cart</button>
      <div className='w-2/3 m-auto '>
      <ItemList data={cartItems}></ItemList>
      </div>
      
    </div>
  )
}
