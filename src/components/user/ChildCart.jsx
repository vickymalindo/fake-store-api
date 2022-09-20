import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

const ChildCart = ({ onClickCheckout, sum, onClickDelete, className, handleClick }) => {
  return (
    <div className={className}>
      <input type="checkbox" className='inline-block w-4 h-4' onClick={handleClick} />
      <FaRegTrashAlt className='cursor-pointer text-green-900 font-bold w-5 h-5 block' onClick={onClickDelete} />
      <div>{sum}</div>
      <button onClick={onClickCheckout} className='border-none bg-green-400 text-green-900 font-bold px-2 py-2 rounded-sm'>Checkout</button>
    </div >
  )
}

export default ChildCart