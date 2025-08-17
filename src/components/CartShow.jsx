import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Menulist from './Menulist';
import { clearCart } from '../utilities/cartSlice';

const CartShow = () => {
const dispatch = useDispatch();
const RemoveHandle =()=>{
  dispatch(clearCart());
}

  const cartItems = useSelector((store)=> store.cart.items)
  return (<><div><div className='text-center gap-2.5 flex justify-evenly font-bold mt-2 text-xl'> <span>Cart</span>
  <button onClick={RemoveHandle} className='bg-emerald-300 rounded-lg p-2 cursor-pointer hover:bg-emerald-400 '>Clear Cart</button></div>
  <div className='w-6/12 m-auto '>
    <Menulist  items={cartItems}/>
    </div>
    </div>
    </>
  )
}

export default CartShow;