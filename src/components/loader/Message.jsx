import React from 'react'

const Message = ({ status }) => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='px-3 py-2 bg-green-300 text-green-900 border-none rounded text-lg'>{status}</div>
    </div>
  )
}

export default Message