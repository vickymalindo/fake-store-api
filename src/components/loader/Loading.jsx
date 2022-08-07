import React from 'react'

const Loading = ({status}) => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='p-3 bg-green-300 text-green-900'>{status}</div>
    </div>
  )
}

export default Loading