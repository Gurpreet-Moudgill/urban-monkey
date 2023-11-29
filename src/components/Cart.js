import React from 'react'
import { RxDashboard } from "react-icons/rx"
import { AiOutlineHeart } from "react-icons/ai"
import { FiLogOut } from "react-icons/fi"
import Spotted from './Spotted'
import { useCart } from 'react-use-cart'

function Cart() {

  const {isEmpty, totalUniqueItems, items, totalItems, cartTotal, updateItemQuantity, removeItem, emptyCart} = useCart();

  if (isEmpty) {
    return <h1>Empty</h1>
  }

  return (
    <div>

      <div>
        <span className="collab1"> MY CART</span>
        <br />
        <p className="collaba"></p>
      </div>

      <div className='d-flex my-5'>
        <div className='leftside'>
          <h2>Cart ({totalUniqueItems})</h2>

        </div>

      </div>
      <div className='last'>
        <Spotted />
      </div>

    </div>
  )
}

export default Cart
