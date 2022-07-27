import React from 'react'
import Thumb from '../../images/thumbnail.png'

const Thumbnail = () => {
  return (
    <div className='flex justify-center mt-2'>
        <img className='w-screen md:max-w-screen-lg' src={Thumb} alt="thumbnail" />
    </div>
  )
}

export default Thumbnail