import React from 'react'
import Categories from './Categories'
import Footer from './Footer'
import Nav from './Nav'
import Product from './Product'
import Thumbnail from './Thumbnail'
import { Navigate } from 'react-router-dom'

const MainFront = () => {
  const token = localStorage.getItem('token')

  return (
    <div>
      {
        token
          ?
          <Navigate to='/user' />
          :
          (
            <div className='w-full'>
              <Nav />
              <Thumbnail />
              <Categories />
              <Product />
              <Footer />
            </div>
          )
      }

    </div>
  )
}

export default MainFront